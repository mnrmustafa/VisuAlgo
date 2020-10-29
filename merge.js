
function Merge()
{
    $("#merge").show();
    $("#bbl").hide();
    $("#select").hide();
    $("#insert").hide();
    $("#quick").hide();
    c_delay=0;

    merge_partition(0,array_size-1);

    enable_buttons();
}

function merge_sort(start,mid,end)
{
    div_update(divs[array_size],div_sizes[array_size],"green",17);
    var p=start,q=mid+1;
    div_update(divs[array_size],div_sizes[array_size],"green",17);

    div_update(divs[array_size],div_sizes[array_size],"green",18);
    var Arr=[],k=0;
    div_update(divs[array_size],div_sizes[array_size],"green",18);

    for(var i=start; i<=end; i++)
    {
        div_update(divs[array_size],div_sizes[array_size],"green",19);
        div_update(divs[array_size],div_sizes[array_size],"green",19);


        if(p>mid)
        {
            div_update(divs[array_size],div_sizes[array_size],"green",20);
            div_update(divs[array_size],div_sizes[array_size],"green",20);

            div_update(divs[array_size],div_sizes[array_size],"green",21);
            Arr[k++]=div_sizes[q++];
            div_update(divs[array_size],div_sizes[array_size],"green",21);

            div_update(divs[q-1],div_sizes[q-1],"#400082");//Color update
        }
        else if(q>end)
        {
            div_update(divs[array_size],div_sizes[array_size],"green",22);
            div_update(divs[array_size],div_sizes[array_size],"green",22);

            div_update(divs[array_size],div_sizes[array_size],"green",23);
            Arr[k++]=div_sizes[p++];
            div_update(divs[array_size],div_sizes[array_size],"green",23);
            div_update(divs[p-1],div_sizes[p-1],"#400082");//Color update
        }
        else if(div_sizes[p]<div_sizes[q])
        {
          div_update(divs[array_size],div_sizes[array_size],"green",24);
          div_update(divs[array_size],div_sizes[array_size],"green",24);

          div_update(divs[array_size],div_sizes[array_size],"green",25);
          Arr[k++]=div_sizes[p++];
          div_update(divs[array_size],div_sizes[array_size],"green",25);
          div_update(divs[p-1],div_sizes[p-1],"#400082");//Color update
        }
        else
        {
          div_update(divs[array_size],div_sizes[array_size],"green",26);
          div_update(divs[array_size],div_sizes[array_size],"green",26);

          div_update(divs[array_size],div_sizes[array_size],"green",27);
          Arr[k++]=div_sizes[q++];
          div_update(divs[array_size],div_sizes[array_size],"green",27);
          div_update(divs[q-1],div_sizes[q-1],"#400082");//Color update
        }
    }

    for(var t=0;t<k;t++)
    {
      div_update(divs[array_size],div_sizes[array_size],"green",28);
      div_update(divs[array_size],div_sizes[array_size],"green",28);

      div_update(divs[array_size],div_sizes[array_size],"green",29);
      div_sizes[start++]=Arr[t];
      div_update(divs[array_size],div_sizes[array_size],"green",29);
      div_update(divs[start-1],div_sizes[start-1],"#428b46");//Color update
    }
}

function merge_partition(start,end)
{
    if(start < end)
    {
      div_update(divs[array_size],div_sizes[array_size],"green",30);
      div_update(divs[array_size],div_sizes[array_size],"green",30);

        div_update(divs[array_size],div_sizes[array_size],"green",31);
        div_update(divs[array_size],div_sizes[array_size],"green",31);
        var mid=Math.floor((start + end) / 2);
        div_update(divs[mid],div_sizes[mid],"yellow");//Color update

        div_update(divs[array_size],div_sizes[array_size],"green",32);
        div_update(divs[array_size],div_sizes[array_size],"green",32);
        merge_partition(start,mid);

        div_update(divs[array_size],div_sizes[array_size],"green",33);
        div_update(divs[array_size],div_sizes[array_size],"green",33);
        merge_partition(mid+1,end);

        div_update(divs[array_size],div_sizes[array_size],"green",34);
        div_update(divs[array_size],div_sizes[array_size],"green",34);
        merge_sort(start,mid,end);

    }
}
