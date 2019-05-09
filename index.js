$(document).ready(function () {
    $("#salary").on("keyup", function () {
        var salary = $(this).val();
        var slab1 = 0;
        var slab2 = 0;
        var slab3 = 0
        if (salary - 250000 > 0) {
            diff = salary - 250000;

            if (diff < 250000) {
                slab1 = diff * 0.05
                $("#slab1").text(`${slab1}`)
            } else {
                slab1 = 12500;
                $("#slab1").text(`${slab1}`);

                diff = salary - 500000;
                slab2 = diff * 0.1;
                $("#slab2").text(`${slab2}`);

                if (diff > 500000) {
                    diff = diff - 500000;
                    slab1 = 12500;
                    slab2 = 50000;
                    $("#slab1").text(`${slab1}`);
                    $("#slab2").text(`${slab2}`);

                    slab3 = diff * 0.3;
                    $("#slab3").text(`${slab3}`);

                }
            }
            $("#total").text(`${slab1 + slab2 + slab3}`)

        } else {
            $("#total").text("No Tax yet! 🎉")
        }


    });
});