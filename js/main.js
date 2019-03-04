function getmyelse(ele){
   return document.getElementById(ele);
}

var ThongBao = ["Vui lòng nhập họ và tên","Vui long nhap Ma"];       

function kiemtraHo(idtext,idThongBao,textFail){

    var textFailes = getmyelse(idtext).value;
    var warning = getmyelse(idThongBao);
   
   
        if(textFailes === ""){
            warning.style.display = "block"; 
            warning.innerHTML = ThongBao[textFail];
        }
        else{
            warning.style.display = "none"; 
               }
 

}


getmyelse('btnThemNV').addEventListener("click",function(){
   
        kiemtraHo("ho","tbHoTen",[0])
        kiemtraHo("ma","tbMa",[1])
   
  
});