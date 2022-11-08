function oblicz()
{
    var d1=document.getElementById("dz").value;
    var d2=document.getElementById("dor").value;
    if (!isNaN(d1) && !isNaN(d2))
    {
        var koszt=d1*25+d2*35;
        document.getElementById("wynik").innerHTML= "Cennik warsztatów: <br> Dzieci 6-18 lat = 25 zł/2h <br> Osoby dorosłe 35 zł/2h <br> Twoje zgłoszenie wynosi: "+koszt+"zł";
    }
}