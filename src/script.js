// Download button function just for visual fun
const downloadPDF = (id) => {
    const button = document.getElementById(id);

    button.classList.add('success');
    setTimeout(() => {
      button.classList.remove('success');
    }, 3000);

  };
