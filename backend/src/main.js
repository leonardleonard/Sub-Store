/**
 *  ███████╗██╗   ██╗██████╗       ███████╗████████╗ ██████╗ ██████╗ ███████╗
 *  ██╔════╝██║   ██║██╔══██╗      ██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗██╔════╝
 *  ███████╗██║   ██║██████╔╝█████╗███████╗   ██║   ██║   ██║██████╔╝█████╗
 *  ╚════██║██║   ██║██╔══██╗╚════╝╚════██║   ██║   ██║   ██║██╔══██╗██╔══╝
 *  ███████║╚██████╔╝██████╔╝      ███████║   ██║   ╚██████╔╝██║  ██║███████╗
 *  ╚══════╝ ╚═════╝ ╚═════╝       ╚══════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝
 * Advanced Subscription Manager for QX, Loon, Surge and Clash.
 * @author: Peng-YM
 * @github: https://github.com/sub-store-org/Sub-Store
 * @documentation: https://www.notion.so/Sub-Store-6259586994d34c11a4ced5c406264b46
 */
import { version } from '../package.json';
import './vercel-deps';

console.log('Sub-Store Starting...');
console.log(
    `
┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
     Sub-Store -- v${version}
┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
`,
);
import migrate from '@/utils/migration';
import serve from '@/restful';

console.log('Starting migration...');
try {
    migrate();
    console.log('Migration finished.');
} catch (e) {
    console.error('Migration failed:', e);
}
console.log('Starting server...');
let app;
try {
    app = serve();
    console.log('Server started/exported.');
} catch (e) {
    console.error('Server init failed:', e);
    app = (req, res) => {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(
            JSON.stringify({
                status: 'failed',
                message:
                    'Sub-Store server init failed. Check Vercel Runtime Logs for details.',
            }),
        );
    };
}
export default app;
