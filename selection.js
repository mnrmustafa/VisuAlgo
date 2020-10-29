function Selection(){

  $("#select").show();
  $("#bbl").hide();
  $("#insert").hide();
  $("#merge").hide();
  $("#quick").hide();

  c_delay=0;
  let k;
    for(var i=0;i<array_size-1;i++)
    {
        div_update(divs[i],div_sizes[i], "yellow",12);
        div_update(divs[i],div_sizes[i], "yellow",12);

        for(var j= k=i;j<array_size;j++)
        {
          div_update(divs[array_size],div_sizes[array_size], "yellow",13);

          div_update(divs[i],div_sizes[i], "#400082");//Color Update
          if(j!=i)
            div_update(divs[j],div_sizes[j], "yellow");//Color update

          div_update(divs[array_size],div_sizes[array_size], "yellow",13);
          div_update(divs[array_size],div_sizes[array_size], "yellow",14);
          div_update(divs[array_size],div_sizes[array_size], "yellow",14);
          if(div_sizes[j]<div_sizes[k])
            {

              if(k!=i)
                div_update(divs[k],div_sizes[k], "#d7385e");//Color update


              div_update(divs[array_size],div_sizes[array_size], "yellow",15);

              k=j;
              div_update(divs[k],div_sizes[k], "#400082");//Color update

              div_update(divs[array_size],div_sizes[array_size], "yellow",15);
            }
            else{
                  div_update(divs[j],div_sizes[j], "#d7385e");//Color update
            }

          }
          //Swapping
            div_update(divs[array_size],div_sizes[array_size], "yellow",16);

            var temp=div_sizes[i];
            div_sizes[i]=div_sizes[k];
            div_sizes[k]=temp;
            div_update(divs[i],div_sizes[i], "#428b46");//Height update
            div_update(divs[k],div_sizes[k], "#d7385e");//Height update

            div_update(divs[array_size],div_sizes[array_size], "yellow",16);


        div_update(divs[i],div_sizes[i], "#428b46");//Color update
    }
      div_update(divs[array_size-1],div_sizes[array_size-1], "#428b46");//Color update
    enable_buttons();
}
