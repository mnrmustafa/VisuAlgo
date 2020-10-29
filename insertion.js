function Insertion()
{
    $("#insert").show();
    $("#bbl").hide();
    $("#select").hide();
    $("#merge").hide();
    $("#quick").hide();

    c_delay=0;

    for(var j=0;j<array_size;j++)
    {
        div_update(divs[j],div_sizes[j],"yellow",5);
        div_update(divs[j],div_sizes[j],"yellow");//Color update
        div_update(divs[j],div_sizes[j],"yellow",5);

        div_update(divs[j],div_sizes[j],"yellow",6);
        var i=j-1;
        div_update(divs[j],div_sizes[j],"yellow",6);

        div_update(divs[j],div_sizes[j],"yellow",7);
        var x= div_sizes[j];
        div_update(divs[j],div_sizes[j],"yellow",7);

        while(i>=0 && div_sizes[i]>x)
        {
            div_update(divs[array_size],div_sizes[array_size],"yellow",8);
            div_update(divs[array_size],div_sizes[array_size],"yellow",8);
            div_update(divs[i],div_sizes[i],"#400082");//Color update
            div_update(divs[i+1],div_sizes[i+1],"#400082");//Color update

            div_update(divs[array_size],div_sizes[array_size],"yellow",9);
            div_sizes[i+1]=div_sizes[i];
            div_update(divs[array_size],div_sizes[array_size],"yellow",9);

            div_update(divs[i],div_sizes[i],"#400082");//Height update
            div_update(divs[i+1],div_sizes[i+1],"#400082");//Height update

            div_update(divs[i],div_sizes[i],"#d7385e");//Color update
            if(i==(j-1))
            {
                div_update(divs[i+1],div_sizes[i+1],"#d7385e");//Color update
            }
            else
            {
                div_update(divs[i+1],div_sizes[i+1],"#d7385e");//Color update
            }

            div_update(divs[array_size],div_sizes[array_size],"yellow",10);
            i--;
            div_update(divs[array_size],div_sizes[array_size],"yellow",10);
        }

        div_update(divs[array_size],div_sizes[array_size],"yellow",11);
        div_sizes[i+1]=x;
        div_update(divs[array_size],div_sizes[array_size],"yellow",11);

        for(var t=0;t<j;t++)
        {
            div_update(divs[t],div_sizes[t],"#428b46");//Color update
        }
    }
    div_update(divs[j-1],div_sizes[j-1],"#428b46");//Color update

    enable_buttons();
}
