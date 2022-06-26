$(function () {
    $(".monster-btn").on("click", function () {
        let input = $(".monster-name").val();
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${input}/`, //アクセスするURL
            type: 'get', //post or get
            cache: false,        //cacheを使うか使わないかを設定
            dataType: 'json',     //data type script・xmlDocument・jsonなど
        })
            .done(function (response) {
                $(".monster-appearance").children('img').attr('src', response.sprites.front_default).attr("width", "500px").attr("height", "500px");
                // $(".fade").addClass("view")
                $(".monster-name").remove();
                $(".monster-btn").remove();
                console.log(response);
                // $(".monster-list").remove();
                //通信成功時の処理
                //成功したとき実行したいスクリプトを記載
            })
            .fail(function (xhr) {
                //通信失敗時の処理
                //失敗したときに実行したいスクリプトを記載
            })
            .always(function (xhr, msg) {
                //通信完了時の処理
                //結果に関わらず実行したいスクリプトを記載
            });
    })

    // たたかう
    $(".attack").on("click", function () {
        $("#command-text").removeClass("hide");
        $("#command-text .chara-c1").text("みんなで力を合わせてモンスターを攻撃した!15000ポイントのダメージを与えた!モンスターを倒した!");
        $("#container-command").remove();
        $(".monster-appearance").remove();
    })
    // にげる
    $(".escape").on("click", function () {
        $("#command-text").removeClass("hide");
        $("#command-text .chara-c1").text("うまくにげきれた");
        $("#container-command").remove();
    })
    // いれかえ
    $(".swap").on("click", function () {
        $("#command-text").removeClass("hide");
        $("#command-text .chara-c1").text("ルイス");
        $("#command-text .chara-c2").text("きんじょう");
        $("#command-text .chara-c3").text("ぐしけん");
        $("#command-text .chara-c4").text("とっしー");
        $("#command-text .chara-c5").text("はるな");
        $("#command-text .chara-c6").text("ゆきのり");
        $("#command-text .chara-c7").text("りか");
        $("#command-text .return").text("戻る");
        div = $("#container-command").detach();
    })
    $(".return").on("click", function () {
        $("#command-text").remove();
        // $(this).before(div);
    })

    $(".chara-c1").on("click", function () {
        $("#member-list1").addClass("hyozi")
        $(".first-name").text("ルイス");
        $("#member-list1").children("img").attr('src', "./img/ruis.png").attr("width", "120px").attr("height", "120px");
        $(".first-hp").text("HP:700");
        $(".first-t").text("GS:75");
        $(".first-lv").text("Lv:100");
    })
    $(".chara-c2").on("click", function () {
        $("#member-list2").addClass("hyozi")
        $(".second-name").text("きんじょう");
        $("#member-list2").children("img").attr('src', "./img/kinjou.png").attr("width", "120px").attr("height", "120px");
        $(".second-hp").text("HP:500");
        $(".second-t").text("TP:98");
        $(".second-lv").text("Lv:??");
    })
    $(".chara-c3").on("click", function () {
        $("#member-list3").addClass("hyozi")
        $(".third-name").text("ぐしけん");
        $("#member-list3").children("img").attr('src', "./img/gushikenn.png").attr("width", "120px").attr("height", "120px");
        $(".third-hp").text("HP:280");
        $(".third-t").text("");
        $(".third-lv").text("Lv:??");
    })
    $(".chara-c4").on("click", function () {
        $("#member-list4").addClass("hyozi")
        $(".forth-name").text("とっしー");
        $("#member-list4").children("img").attr('src', "./img/tossi.png").attr("width", "120px").attr("height", "120px");
        $(".forth-hp").text("HP:300");
        $(".forth-t").text("BF:5");
        $(".forth-lv").text("Lv:29");
    })
    $(".chara-c5").on("click", function () {
        $("#member-list1").addClass("hyozi")
        $(".first-name").text("ルイス");
        $("#member-list1").children("img").attr('src', "./img/ruis.png").attr("width", "120px").attr("height", "120px");
        $(".first-hp").text("HP:700");
        $(".first-t").text("GS:75");
        $(".first-lv").text("Lv:100");
    })
    $(".chara-c5").on("click", function () {
        $("#member-list1").addClass("hyozi")
        $(".first-name").text("ルイス");
        $("#member-list1").children("img").attr('src', "./img/ruis.png").attr("width", "120px").attr("height", "120px");
        $(".first-hp").text("HP:700");
        $(".first-t").text("GS:75");
        $(".first-lv").text("Lv:100");
    })
    $(".chara-c5").on("click", function () {
        $("#member-list1").addClass("hyozi")
        $(".first-name").text("ルイス");
        $("#member-list1").children("img").attr('src', "./img/ruis.png").attr("width", "120px").attr("height", "120px");
        $(".first-hp").text("HP:700");
        $(".first-t").text("GS:75");
        $(".first-lv").text("Lv:100");
    })
})