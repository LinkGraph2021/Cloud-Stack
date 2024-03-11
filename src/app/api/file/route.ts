import { readFile } from 'fs/promises';
import path from 'path'

export async function GET() {
  const buffer = await readFile(path.join(process.cwd(), 'src/app/htmls', 'test.html'));

  const headers = new Headers();
  headers.append('Content-Disposition', 'attachment; filename="test.htmtl"');
  headers.append('Content-Type', 'text/html');

  return new Response(buffer, {
    headers,
  });
}