import { readFile } from 'fs/promises';
import { URLSearchParams } from 'next/dist/compiled/@edge-runtime/primitives/url';
import path from 'path'

export async function GET(req: Request) {
  var cpath = 'https://cloud-stack-delta.vercel.app';
  var currentURL = req.headers.get('filename') ? req.headers.get('filename') : 'test';
  if( process.env.NODE_ENV == 'development' ){
    cpath = process.cwd() + '/public';
  }else if( process.env.NODE_ENV == 'production' ){
    cpath = require.resolve(path.join(`${cpath}/static/htmls`, `${currentURL}.html`))
  }
  const buffer = await readFile(cpath);
  const headers = new Headers();
  headers.append('Content-Disposition', `attachment; filename="${currentURL}.htmtl"`);
  headers.append('Content-Type', 'text/html');

  return new Response(buffer, {
    headers,
  });
}