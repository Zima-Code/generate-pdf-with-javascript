function downloadPdf(config) {
  window.jsPDF = window.jspdf.jsPDF;

  const { url, output, design, exportPDF, body } = config;

  fetch(url + '?' + new URLSearchParams({
    output,
    design,
    exportPDF
  }), {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache', 
    headers: {
      "x-epdfgenapisecrettoken": 'cle7n0r7u0001jw1j09l0bmko',
      "x-epdfgenid": 'cle7hphvd0000jwnp0pd8cl3i'
    },
    body: JSON.stringify(body) 
  })
  .then((res) => {
    return res.text();
  })
  .then(data => {
    const pdf = new jsPDF();
    pdf.addImage(data, 'PNG', 0, 0);
    pdf.save(`${design}.pdf`);
  })
  .catch(error => {
    console.error('Error downloading PDF:', error);
  });
}