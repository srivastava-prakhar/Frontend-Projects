let calculation = localStorage.getItem('calculation') || '';
show()




let res='';
        function doCalculation(enter){
          calculation = calculation + enter ;
        
      calci();
      localStorage.setItem('calculation', calculation);
      }
  
          function calci(){
            
            document.querySelector('.js-result')
          .innerHTML= calculation;
          
        }

      function show() { 
           
            document.querySelector('.js-show')
          .innerHTML= calculation;
        
  }
  
  
