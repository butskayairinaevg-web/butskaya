// PDF Export using html2pdf.js
function exportPDF() {
  showPayModal();
  return;
  // Hide export buttons and delete for PDF
  let hides = document.querySelectorAll('.hide-on-export');
  hides.forEach(el=>el.style.display='none');
  setTimeout(()=>{
      const element = document.getElementById('export-wrapper');
