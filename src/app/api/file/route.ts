import { readFile } from 'fs/promises';
import { URLSearchParams } from 'next/dist/compiled/@edge-runtime/primitives/url';
import path from 'path'

export async function GET(req: Request) {
  var currentURL = req.headers.get('filename') ? req.headers.get('filename') : 'test'
  const buffer = await readFile(path.join(process.cwd(), '/htmls', 'test.html'));
  const headers = new Headers();
  headers.append('Content-Disposition', `attachment; filename="${currentURL}.htmtl"`);
  headers.append('Content-Type', 'text/html');

  return new Response(buffer, {
    headers,
  });
}