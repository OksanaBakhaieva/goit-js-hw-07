formData.addEventListener(`submit`, (e) => {
    e.preventDefault();
    const elems = e.target.elements;
    const data = {
        email: elems.email.value.trim(),
        password: elems.password.value.trim(),
    };
    if (data.email === '' || data.password == '') {
    return alert('All form fields must be filled in');
  }
  console.log(data);
  e.target.reset();
})
