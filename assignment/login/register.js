window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
      form.onsubmit = validateForm;
    
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
  


  var a = document.forms["myForm"]["password"].value;
  var b = document.forms["myForm"]["confirm"].value;

  if(a != b){
  	alert("กรุณาใส่ใหม่ให้ตรงกันนะครับ");
    return false;

  } else {
  	alert("เสร็จสิ้น");
  }

}