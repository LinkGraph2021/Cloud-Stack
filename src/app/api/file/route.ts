import { readFile } from 'fs/promises';
import { URLSearchParams } from 'next/dist/compiled/@edge-runtime/primitives/url';
import path from 'path'

export async function GET(req: Request) {
  var cpath = __dirname;
  if( process.env.NODE_ENV == 'development' ){
    cpath = process.cwd() + '/public';
  }
  console.log( cpath );
  var currentURL = req.headers.get('filename') ? req.headers.get('filename') : 'test'
  const buffer = await readFile(path.join(`${cpath}/static/htmls`, 'test.html'));
  const headers = new Headers();
  headers.append('Content-Disposition', `attachment; filename="${currentURL}.htmtl"`);
  headers.append('Content-Type', 'text/html');

  return new Response(buffer, {
    headers,
  });
}