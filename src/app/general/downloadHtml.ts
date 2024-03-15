'use client';

export async function downloadHtml(response:any, fileName:any) {
    const buffer = Buffer.from(response, 'utf8');
    const headers = new Headers();
    headers.append('Content-Disposition', `attachment; filename="${fileName}.html"`);
    headers.append('Content-Type', 'text/html');

    const cResponse = new Response(buffer, {
        headers,
    });
    
    const blob = await cResponse.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName}.html`;
    link.click();
    window.URL.revokeObjectURL(url);
}