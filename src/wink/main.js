$(document).ready(function() {
    firebase.initializeApp({
        apiKey: "AIzaSyDjBalIZw7AgtGTz10rdNqMpdxxdFTW46o",
        databaseURL: "https://stan-life.firebaseio.com",
    })

    var db = firebase.database()
    var winksRef = db.ref('winks')

    var encodedStringTextarea = $("#encodedString")
    var decodedStringTextarea = $("#decodedString")

    encodedStringTextarea.on('focus', function() {
        $(this).parent().removeClass('disabled')
        decodedStringTextarea.parent().addClass('disabled')
    })

    decodedStringTextarea.on('focus', function() {
        $(this).parent().removeClass('disabled')
        encodedStringTextarea.parent().addClass('disabled')
    })

    encodedStringTextarea.on('keyup change', function() {
        decodedStringTextarea.val(winkEncrypt.decodeString(encodedStringTextarea.val()))
    })

    decodedStringTextarea.on('keyup change', function() {
        encodedStringTextarea.val(winkEncrypt.encodeString(decodedStringTextarea.val()))
        var newWink = winksRef.push()
        newWink.set({ decodedValue: decodedStringTextarea.val() })
    })

    setTimeout(function() {
        encodedStringTextarea.val(':--!!.;!.;?!!!.;?!!!.;-!')
        encodedStringTextarea.trigger('change')
    }, 1)
})
