# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Install
```
npm install
npm run dev
```

## Step to add 3D Models | Three.js
1. Go to https://sketchfab.com/ and download file .glTF one
2. Install gltf pipleline: 
- Run: npm install -g gltf-pipeline
- Docs: https://github.com/CesiumGS/gltf-pipeline
3. Converting a glTF to Draco glTF: 
- Open command at the download folder 
- Then run: gltf-pipeline -i scene.gltf -o bee.gltf -d
4. Converting Draco glTF to jsx
- Still at download folder, run: npx gltfjsx bee.gltf --transform
- Docs: https://github.com/pmndrs/gltfjsx
5. Then copy Bee.jsx file to your project and bee-transformed.glb to your assests, remember to export default