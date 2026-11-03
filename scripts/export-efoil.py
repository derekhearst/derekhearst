# Export the eFoil V2 model's exterior to static/efoil.glb for the 3D viewer on the site.
#
#   blender -b <eFoil repo>/model/efoil_v2.blend --python scripts/export-efoil.py
#
# Only the parts you can see from outside are exported. Cutters, foam blanks,
# machining stock and the electronics sealed inside the hull are skipped.
import os

import bpy

KEEP_COLLECTIONS = {'Hull & core', 'Deck pad', 'Foil', 'Hardpoints'}
KEEP_EXTRA = {'Lid', 'ChargePort', 'ChargePortCap'}
SKIP_PREFIXES = ('DenseFoam', 'HandleIns', 'Handle_PadCut')

out = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'static', 'efoil.glb')

bpy.ops.object.select_all(action='DESELECT')
picked = []
for obj in bpy.data.objects:
	if obj.type != 'MESH' or obj.name.endswith('_cut') or obj.name.startswith(SKIP_PREFIXES):
		continue
	in_keep = any(c.name in KEEP_COLLECTIONS for c in obj.users_collection)
	if not (in_keep or obj.name in KEEP_EXTRA):
		continue
	# Some parts are hidden in the saved scene (it is left in a machining view), so unhide them for export.
	obj.hide_set(False)
	obj.hide_viewport = False
	obj.hide_render = False
	for col in obj.users_collection:
		col.hide_viewport = False
	obj.select_set(True)
	picked.append(obj.name)

# The source file uses see-through "x-ray" materials so the internals are visible while designing.
# For the site, make the outside solid: a lime hull like the real board, dark deck pads, matte carbon.
# Colors are linear (Blender's working space), not sRGB.
MATERIAL_OVERRIDES = {
	'V2_hull_glass': ((0.37, 0.79, 0.05, 1.0), 0.35),
	'V2_lid': ((0.30, 0.66, 0.04, 1.0), 0.35),
	'V2_eva': ((0.03, 0.035, 0.035, 1.0), 0.9),
	'V2_carbon': ((0.04, 0.04, 0.045, 1.0), 0.5),
}
for name, (color, roughness) in MATERIAL_OVERRIDES.items():
	mat = bpy.data.materials.get(name)
	if not mat:
		continue
	bsdf = mat.node_tree.nodes.get('Principled BSDF') if mat.use_nodes else None
	if bsdf:
		bsdf.inputs['Base Color'].default_value = color
		bsdf.inputs['Alpha'].default_value = 1.0
		bsdf.inputs['Roughness'].default_value = roughness
	mat.diffuse_color = color
	if hasattr(mat, 'surface_render_method'):
		mat.surface_render_method = 'DITHERED'
	if hasattr(mat, 'blend_method'):
		mat.blend_method = 'OPAQUE'

print('EXPORTING', len(picked), sorted(picked))
bpy.ops.export_scene.gltf(
	filepath=os.path.abspath(out),
	export_format='GLB',
	use_selection=True,
	export_apply=True,
	export_yup=True,
	export_materials='EXPORT',
	export_cameras=False,
	export_lights=False,
	export_animations=False,
)
print('WROTE', os.path.abspath(out), os.path.getsize(out), 'bytes')
