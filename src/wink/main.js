$(document).ready(function() {
    firebase.initializeApp({
        apiKey: "AIzaSyDjBalIZw7AgtGTz10rdNqMpdxxdFTW46o",
        databaseURL: "https://stan-life.firebaseio.com",
    })

    var db = firebase.database()
    var winksEncodedRef = db.ref('winksEncoded')
    var winksDecodedRef = db.ref('winksDecoded')

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
        var decodedString = winkEncrypt.decodeString(encodedStringTextarea.val())
        decodedStringTextarea.val(decodedString)
        var newWinksEncodedRef = winksEncodedRef.push()
        newWinksEncodedRef.set({ val: decodedString })
    })

    decodedStringTextarea.on('keyup change', function() {
        var decodedString = decodedStringTextarea.val()
        encodedStringTextarea.val(winkEncrypt.encodeString(decodedString))
        var newWinksDecodedRef = winksDecodedRef.push()
        newWinksDecodedRef.set({ val: decodedString })
    })

    setTimeout(function() {
        encodedStringTextarea.val(':--!!.;!.;?!!!.;?!!!.;-!')
        encodedStringTextarea.trigger('change')
    }, 1)
})
