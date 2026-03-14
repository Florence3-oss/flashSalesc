function calculate() {
          var originalprc =parseFloat(document.getElementById("oprc").value);
          var percentoff =parseFloat(document.getElementById("perc").value);
 
          var discountprc=originalprc*(percentoff/100);
          var finalprc=originalprc-discountprc;

          document.getElementById("fprc").textContent="$"+finalprc.toFixed(2);

        }