function Quick()
{
    c_delay=0;

    $("#quick").show();
    $("#bbl").hide();
    $("#select").hide();
    $("#insert").hide();
    $("#merge").hide();

    quick_sort(0,array_size-1);

    enable_buttons();
}

function quick_partition (start, end)
{
    div_update(divs[array_size],div_sizes[array_size],"green",35);
    var i = start + 1;
    div_update(divs[array_size],div_sizes[array_size],"green",35);

    div_update(divs[array_size],div_sizes[array_size],"green",36);
    var pivot = div_sizes[start] ;//making the first element as pivot element.
    div_update(divs[array_size],div_sizes[array_size],"green",36);
    div_update(divs[start],div_sizes[start],"yellow");//Color update

        for(var j =start + 1; j <= end ; j++ )
        {
            div_update(divs[array_size],div_sizes[array_size],"green",37);
            div_update(divs[array_size],div_sizes[array_size],"green",37);
            //rearranging the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (div_sizes[ j ] < pivot)
            {
              div_update(divs[array_size],div_sizes[array_size],"green",38);
              div_update(divs[array_size],div_sizes[array_size],"green",38);
              div_update(divs[j],div_sizes[j],"yellow");//Color update

              div_update(divs[i],div_sizes[i],"#400082");//Color update
              div_update(divs[j],div_sizes[j],"#400082");//Color update

              div_update(divs[array_size],div_sizes[array_size],"green",39);
              var temp=div_sizes[i];
              div_sizes[i]=div_sizes[j];
              div_sizes[j]=temp;
              div_update(divs[array_size],div_sizes[array_size],"green",39);

              div_update(divs[i],div_sizes[i],"#400082");//Height update
              div_update(divs[j],div_sizes[j],"#400082");//Height update

              div_update(divs[i],div_sizes[i],"#d7385e");//Height update
              div_update(divs[j],div_sizes[j],"#d7385e");//Height update

              div_update(divs[array_size],div_sizes[array_size],"green",40);
              i += 1;
              div_update(divs[array_size],div_sizes[array_size],"green",40);
            }
    }
    div_update(divs[start],div_sizes[start],"#400082");//Color update
    div_update(divs[i-1],div_sizes[i-1],"#400082");//Color update

    div_update(divs[array_size],div_sizes[array_size],"green",41);
    var temp=div_sizes[start];//putting the pivot element in its proper place.
    div_sizes[start]=div_sizes[i-1];
    div_sizes[i-1]=temp;
    div_update(divs[array_size],div_sizes[array_size],"green",41);

    div_update(divs[start],div_sizes[start],"#400082");//Height update
    div_update(divs[i-1],div_sizes[i-1],"#400082");//Height update

    for(var t=start;t<=i;t++)
    {
        div_update(divs[t],div_sizes[t],"#428b46");//Color update
    }

    div_update(divs[array_size],div_sizes[array_size],"green",42);
    div_update(divs[array_size],div_sizes[array_size],"green",42);
    return i-1;//returning the position of the pivot

}

function quick_sort (start, end )
{
    if( start < end )
    {
      div_update(divs[array_size],div_sizes[array_size],"green",43);
      div_update(divs[array_size],div_sizes[array_size],"green",43);

        //storing the position of pivot element
        div_update(divs[array_size],div_sizes[array_size],"green",44);
        div_update(divs[array_size],div_sizes[array_size],"green",44);
        var pivot_pos = quick_partition (start, end );

        div_update(divs[array_size],div_sizes[array_size],"green",45);
        div_update(divs[array_size],div_sizes[array_size],"green",45);
        quick_sort (start, pivot_pos -1);//sorting the left side of pivot

        div_update(divs[array_size],div_sizes[array_size],"green",46);
        div_update(divs[array_size],div_sizes[array_size],"green",46);
        quick_sort (pivot_pos +1, end) ;//sorting the right side of pivot
    }
 }
