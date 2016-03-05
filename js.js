/*
 * Created by Dennis van Zanten on 9-11-2015.
 * This is a hand-written script made for a school project.
 * Feel free to send me some critics for further improvement.
 */
window.onload = function start() {
    reload();
    intro();
    // Made for function restart button & Activating Buttons.
    function reload(){
        // Clearing all fields.
        document.getElementById("ClientName").innerHTML = "";
        document.getElementById("date1").innerHTML = "";
        document.getElementById("modem").innerHTML = "";
        document.getElementById("intprob").innerHTML = "";
        document.getElementById("nunl").innerHTML = "";
        document.getElementById("f5").innerHTML = "";
        document.getElementById("dl1").innerHTML = "";
        document.getElementById("dl2").innerHTML = "";
        document.getElementById("ib").innerHTML = "";
        document.getElementById("kto").innerHTML = "";
        document.getElementById("brk").innerHTML = "";
        document.getElementById("brk2").innerHTML = "";
        document.getElementById("dl3").innerHTML = "";
        document.getElementById("dl4").innerHTML = "";
        document.getElementById("dl5").innerHTML = "";
        document.getElementById("ibt").innerHTML = "";
        document.getElementById("tvts").innerHTML = "";
        document.getElementById("split").innerHTML = "";
        document.getElementById("sbx").innerHTML = "";
        document.getElementById("znd").innerHTML = "";
        document.getElementById("dl6").innerHTML = "";
        document.getElementById("dl7").innerHTML = "";
        document.getElementById("dl8").innerHTML = "";
        // These button.Onclicks do NOT require a () at the end.
        // With a () at the end the script will infinite restart.
        document.getElementById("lg0").onclick = intro;
        document.getElementById("lg1").onclick = nunl;
        document.getElementById("lg2").onclick = kiestoon;
        document.getElementById("lg3").onclick = tvts;
        document.getElementById("printbut").onclick = print;
        document.getElementById("button1").onclick = start;
    }

    // Calling date, name & modem of client.
    function intro() {
        document.getElementById("ClientName").innerHTML = "";
        document.getElementById("date1").innerHTML = "";
        document.getElementById("modem").innerHTML = "";
        var ClientName = prompt("Klantnaam:");
        if (ClientName.length < 1) {
            intro();
        }
        else {
            document.getElementById("ClientName").innerHTML = "Klantnaam: " + ClientName;
            mod();
        }
    }

    function mod() {
        var Modem = prompt("Modem");
        if (Modem.length < 1) {
            mod();
        }
        else {
            document.getElementById("modem").innerHTML = "Type Modem: " + Modem;
            date();
            iProblem();
        }
    }

    // Troubleshooting Internet.
    function iProblem() {
        var iproblem = confirm("Heeft de klant een probleem met het internet?");
        if (iproblem == true) {
            document.getElementById("intprob").innerHTML = "Klant meldt een probleem met het internet.";
            nunl();
        } else {
            document.getElementById("intprob").innerHTML = "De klant meldt geen probleem met het internet.";
            document.getElementById("nunl").innerHTML = "";
            document.getElementById("dl1").innerHTML = "";
            document.getElementById("f5").innerHTML = "";
            document.getElementById("dl2").innerHTML = "";
            iBellen();
        }
    }

    function nunl() {
        document.getElementById("nunl").innerHTML = "";
        document.getElementById("dl1").innerHTML = "";
        document.getElementById("f5").innerHTML = "";
        document.getElementById("dl2").innerHTML = "";
        var nunl = confirm("Kan de klant www.nu.nl bezoeken?");
        if (nunl == true) {
            document.getElementById("nunl").innerHTML = "Klant kan www.nu.nl bezoeken.";
            document.getElementById("dl1").innerHTML = "";
            f5();
        } else {
            document.getElementById("nunl").innerHTML = "<em>Klant kan www.nu.nl niet bezoeken.</em>";
            document.getElementById("dl1").innerHTML = "<ul><li><a href='Data/Internet/internet-laden.html' target='_blank'>ProbleemOplossing: Laden.</a></li></ul>";
            f5();
        }
    }

    function f5() {
        var f5 = confirm("Ververst de klant zijn scherm snel met f5?");
        if (f5 == true) {
            document.getElementById("f5").innerHTML = "Het scherm verversen met F5 gaat snel.";
            iBellen();
        } else {
            document.getElementById("f5").innerHTML = "<em>Het scherm verversen met F5 gaat niet snel</em>";
            document.getElementById("dl2").innerHTML = "<ul><li><a href='Data/Internet/snelheid-laden.html' target='_blank'>ProbleemOplossing: Snelheid.</a></li></ul>";
        }
    }

    // Troubleshooting Phone connectivity.
    function iBellen() {
        var ib = confirm("Heeft de klant problemen met bellen?");
        if (ib == true) {
            document.getElementById("ib").innerHTML = "De klant meldt een probleem met bellen.";
            kiestoon()
        } else {
            document.getElementById("ib").innerHTML = "De klant meldt geen probleem met bellen.";
            document.getElementById("kto").innerHTML = "";
            document.getElementById("dl3").innerHTML = "";
            document.getElementById("brk").innerHTML = "";
            document.getElementById("dl4").innerHTML = "";
            document.getElementById("brk2").innerHTML = "";
            document.getElementById("dl5").innerHTML = "";
            ibtv();
        }
    }

    function kiestoon() {
        document.getElementById("ib").innerHTML = "De klant meldt geen probleem met bellen.";
        document.getElementById("kto").innerHTML = "";
        document.getElementById("dl3").innerHTML = "";
        document.getElementById("brk").innerHTML = "";
        document.getElementById("dl4").innerHTML = "";
        document.getElementById("brk2").innerHTML = "";
        document.getElementById("dl5").innerHTML = "";
        var kto = confirm("Hoort de klant een kiestoon?");
        if (kto == true) {
            document.getElementById("kto").innerHTML = "De klant hoort een kiestoon.";
            document.getElementById("dl3").innerHTML = "";
            bereik1();
        }
        else {
            document.getElementById("kto").innerHTML = "<em>De klant hoort geen kiestoon.</em>";
            document.getElementById("dl3").innerHTML = "<ul><li><a href='Data/Bellen/geen-kiestoon.html' target='_blank'>ProbleemOplossing: Kiestoon.</a></li></ul>";
            bereik1();
        }
    }

    function bereik1() {
        var brk = confirm("Kan de klant een ander nummer bellen?");
        if (brk == true) {
            document.getElementById("brk").innerHTML = "De klant kan bellen.";
            document.getElementById("dl4").innerHTML = "";
            bereik2();
        }
        else {
            document.getElementById("brk").innerHTML = "<em>De klant kan niet bellen.</em>";
            document.getElementById("dl4").innerHTML = "<ul><li><a href='Data/Bellen/uit-bellen.html' target='_blank'>ProbleemOplossing: Bellen</a></li></ul>";
            bereik2();
        }
    }

    function bereik2() {
        var brk = confirm("Kan de klant gebeld worden?");
        if (brk == true) {
            document.getElementById("brk2").innerHTML = "De klant kan gebeld worden.";
            ibtv();
        }
        else {
            document.getElementById("brk2").innerHTML = "<em>De klant kan niet gebeld worden.</em>";
            document.getElementById("dl5").innerHTML = "<ul><li><a href='Data/Bellen/gebeld-worden.html' target='_blank'>ProbleemOplossing: Gebeld worden.</a></li></ul>";
        }
    }

    // Troubleshooting Television.
    function ibtv() {
        var ibt = confirm("Heeft de klant een probleem met de televisie?");
        if (ibt == true) {
            document.getElementById("ibt").innerHTML = "De klant meldt een probleem met de televisie.";
            tvts();
        }
        else {
            document.getElementById("ibt").innerHTML = "De klant meldt geen probleem met de televisie.";
            document.getElementById("tvts").innerHTML = "";
            document.getElementById("split").innerHTML = "";
            document.getElementById("dl6").innerHTML = "";
            document.getElementById("sbx").innerHTML = "";
            document.getElementById("dl7").innerHTML = "";
            document.getElementById("znd").innerHTML = "";
            document.getElementById("dl8").innerHTML = "";
        }

    }

    function tvts() {
        document.getElementById("tvts").innerHTML = "";
        document.getElementById("split").innerHTML = "";
        document.getElementById("dl6").innerHTML = "";
        document.getElementById("sbx").innerHTML = "";
        document.getElementById("dl7").innerHTML = "";
        document.getElementById("znd").innerHTML = "";
        document.getElementById("dl8").innerHTML = "";
        var tvs = prompt("Hoeveel TV-toestellen heeft de klant?");
        if (tvs > 0) {
            document.getElementById("tvts").innerHTML = "<em>De klant heeft " + tvs + " TV-toestellen.</em>";
            split();
        }
        else {
            document.getElementById("tvts").innerHTML = "De klant heeft geen TV-toestellen.";
            split();
        }
    }

    function split() {
        var splt = confirm("Is de splitter goed aangesloten?");
        if (splt == true) {
            document.getElementById("split").innerHTML = "De splitter is goed aangesloten.";
            document.getElementById("dl6").innerHTML = "";
            stbx();
        }
        else {
            document.getElementById("split").innerHTML = "<em>De splitter is niet goed aangesloten.</em>";
            document.getElementById("dl6").innerHTML = "<ul><li><a href='Data/Televisie/splitter-aangesloten.html' target='_blank'>ProbleemOplossing: Splitter.</a></li></ul>";
            stbx();
        }
    }

    function stbx() {
        var sbox = confirm("Is de setup-box goed aangesloten?");
        if (sbox == true) {
            document.getElementById("sbx").innerHTML = "De setup-box is goed aangesloten.";
            document.getElementById("dl7").innerHTML = "";
            zdrs();
        }
        else {
            document.getElementById("sbx").innerHTML = "<em>De setup-box is niet goed aangesloten.</em>";
            document.getElementById("dl7").innerHTML = "<ul><li><a href='Data/Televisie/setupbox-aangesloten.html' target='_blank'>ProbleemOplossing: Setup-box.</a></li></ul>";
            zdrs();
        }
    }

    function zdrs() {
        var zndr = confirm("Worden de zenders gevonden door de televisie?");
        if (zndr == true) {
            document.getElementById("znd").innerHTML = "De zenders worden gevonden door de televiise.";
            document.getElementById("dl8").innerHTML = "";
        }
        else {
            document.getElementById("znd").innerHTML = "<em>De zenders worden niet gevonden door de televisie.</em>";
            document.getElementById("dl8").innerHTML = "<ul><li><a href='Data/Televisie/zenders-niet-gevonden.html' target='_blank'>ProbleemOplossing: Zenders vinden.</a></li></ul>";
        }
    }

    // Getting & Writing Date.
    function date() {
        var datum = new Date();
        var dag = datum.getDate();
        var maand = datum.getMonth() + 1;
        var jaar = datum.getFullYear();
        document.getElementById("date1").innerHTML = "Klacht gemeldt op: " + dag + "/" + maand + "/" + jaar;
    }

    // Function for Printout.
    function print(){
        window.print();
    }
};
