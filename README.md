# Daz to Blender to ThreeJs

An app that loads a daz model into three. The daz model is prepared then sent to blender via the bridge. In blender a script is run to make materials compatible with glb. The glb file is then packed into the app.

When built it can run as a standalone html file

---------------------------------------
Steps:

create a react vite app

npm i three @react-three/fiber @react-three/drei

npm i --save-dev vite-plugin-singlefile

update vite.config.js

put glb in src/assets

import glb with ?url at the end

npm run build