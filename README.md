# videogular-schematics


### Instalation

<pre>
git clone 
npm i
</pre>

### Use

<pre>
npm run build
schematics .:videogular-schematics

cd <your-angular-proyect>
mkdir node_modules/vgs
</pre>
copy all file (except node_modules & package-lock.json) into your angular cli project >= 1.5  ( folder node_modules/vgs)

<pre>
ng g videogular-schematics vgc --vgService --collection vgs
</pre>

### Options

Command           | Type                                    | Description |
------------------|-----------------------------------------|-------------------| 
 vgService | Boolean | add service
 vgOverlayPlay | Boolean | add vg-overlay-play tag 
  

