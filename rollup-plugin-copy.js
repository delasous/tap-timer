import fs from 'fs';
import path from 'path';

export default function copy({ srcFolder, destFolder, files }) {
    return {
        name: 'copy',
        generateBundle() {
            files.forEach((file) => {
                let src = srcFolder + file
                let dest = destFolder + file

                if ( !fs.existsSync(src) ) return

                fs.copyFileSync(
                    path.resolve(src),
                    path.resolve(dest)
                );
            })
        }
    }
}