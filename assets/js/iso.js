document.addEventListener('DOMContentLoaded', function() {
    const icon = document.getElementById('iso');
  
    icon.addEventListener('mouseover', function() {
      this.src = 'assets/images/SELLO_SISTEMA_CERTIFICADO_9001_SM_UNATINTA_RGB.png';
    });
  
    icon.addEventListener('mouseout', function() {
      this.src = 'assets/images/SELLO_SISTEMA_CERTIFICADO_9001_SM_RGB.png';
    });
  });
  