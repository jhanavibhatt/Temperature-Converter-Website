function convert(){
      let insert = document.getElementById("input").value;
    //   console.log(insert);
      let output = document.getElementById("result");
      let button_1 = document.getElementById("button")

      let v = document.getElementById("degree");
    //   console.log(v);
        // console.log("test");
      let set = v.selectedIndex;
    //   console.log(set);

      if(set == 1){
        output.value = insert *(9/5)+32+"F";
      }
      else if(set == 2){
         output.value = (insert-32)/1.8 + "C";
      }
      else{
        output.value = "enter number";
      }
      
      }
