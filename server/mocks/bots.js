module.exports = function(app) {
  var express = require('express');
  var botsRouter = express.Router();
  var items = [{"id":"278","level":"8","name":"\u0411\u043e\u043b\u044c \u041a\u0440\u043e\u0433\u0433\u0435\u043d\u0442\u0430\u0439\u043b\u0430","type":"852","hp":"750","stats":"sila=75|lovkost=75|inta=75|vinos=50","adds":"krit=750|akrit=600|yvorot=200|ayvorot=600|powerKrit=30|proboiBron=0|contrydar=10|parirovanie=10|bronW1=400|bronW2=650|bronW3=650|bronW4=650|damage_min=15|damage_max=40|bronW=0|bronM=575|atacksW2=100|powerW2=100-110|bron1=40-60|bron2=40-75|bron3=40-75|bron4=40-60|bron5=40-60","priems":"","sex":"2","clan":"0","map":"emerald","align":"0","izlom":"0","img":"\/i\/dungeon\/mobs\/852.png"},{"id":"292","level":"9","name":"\u0411\u043e\u043b\u044c \u041a\u0440\u043e\u0433\u0433\u0435\u043d\u0442\u0430\u0439\u043b\u0430","type":"866","hp":"3600","stats":"sila=100|lovkost=100|inta=100|vinos=75","adds":"krit=700|akrit=650|yvorot=200|ayvorot=625|powerKrit=30|proboiBron=0|contrydar=10|parirovanie=10|bronW1=400|bronW2=650|bronW3=650|bronW4=650|damage_min=25|damage_max=60|bronW=0|bronM=600|atacksW2=100|powerW2=100-110|bron1=40-65|bron2=40-80|bron3=40-80|bron4=40-65|bron5=40-65","priems":"","sex":"2","clan":"0","map":"emerald","align":"9","izlom":"0","img":"\/i\/dungeon\/mobs\/866.png"},{"id":"279","level":"9","name":"\u0411\u043e\u043b\u044c \u041a\u0440\u043e\u0433\u0433\u0435\u043d\u0442\u0430\u0439\u043b\u0430","type":"853","hp":"1800","stats":"sila=100|lovkost=100|inta=100|vinos=75","adds":"krit=675|akrit=600|yvorot=200|ayvorot=600|powerKrit=30|proboiBron=0|contrydar=10|parirovanie=10|bronW1=400|bronW2=650|bronW3=650|bronW4=650|damage_min=15|damage_max=40|bronW=0|bronM=575|atacksW2=100|powerW2=100-110|bron1=40-60|bron2=40-75|bron3=40-75|bron4=40-60|bron5=40-60","priems":"","sex":"2","clan":"0","map":"emerald","align":"0","izlom":"0","img":"\/i\/dungeon\/mobs\/853.png"},{"id":"280","level":"10","name":"\u0411\u043e\u043b\u044c \u041a\u0440\u043e\u0433\u0433\u0435\u043d\u0442\u0430\u0439\u043b\u0430","type":"854","hp":"3000","stats":"sila=120|lovkost=120|inta=120|vinos=100","adds":"krit=675|akrit=600|yvorot=200|ayvorot=600|powerKrit=30|proboiBron=0|contrydar=10|parirovanie=10|bronW1=400|bronW2=650|bronW3=650|bronW4=650|damage_min=20|damage_max=45|bronW=0|bronM=650|atacksW2=100|powerW2=100-110|bron1=40-60|bron2=40-75|bron3=40-75|bron4=40-60|bron5=40-60","priems":"","sex":"2","clan":"0","map":"emerald","align":"0","izlom":"0","img":"\/i\/dungeon\/mobs\/854.png"},{"id":"281","level":"11","name":"\u0411\u043e\u043b\u044c \u041a\u0440\u043e\u0433\u0433\u0435\u043d\u0442\u0430\u0439\u043b\u0430","type":"855","hp":"4000","stats":"sila=150|lovkost=150|inta=150|vinos=120","adds":"krit=675|akrit=600|yvorot=200|ayvorot=600|powerKrit=30|proboiBron=0|contrydar=10|parirovanie=10|bronW1=400|bronW2=650|bronW3=650|bronW4=650|damage_min=20|damage_max=45|bronW=0|bronM=700|atacksW2=100|powerW2=100-110|bron1=40-70|bron2=40-80|bron3=40-80|bron4=40-70|bron5=40-70","priems":"","sex":"2","clan":"0","map":"emerald","align":"0","izlom":"0","img":"\/i\/dungeon\/mobs\/855.png"},{"id":"261","level":"10","name":"\u0411\u0440\u043e\u0434\u044f\u0447\u0430\u044f \u0417\u0430\u0431\u043b\u0443\u0434\u0448\u0430\u044f \u0414\u0443\u0448\u0430","type":"835","hp":"900","stats":"sila=10|lovkost=25|inta=25|vinos=40|intel=25|mydrost=40","adds":"krit=800|akrit=800|yvorot=800|ayvorot=800|powerKrit=20|proboiBron=0|contrydar=10|parirovanie=10|bronW1=500|bronW2=500|bronW3=500|bronW4=500|damage_min=80|damage_max=140|bronW=0|bronM=375|atacksW2=100|powerW2=100-110|bron1=20-35|bron2=30-45|bron3=30-45|bron4=20-35|bron5=20-35|abs_yvorot=3|abs_krit=3","priems":"","sex":"2","clan":"0","map":"ptp","align":"0","izlom":"0","img":"\/i\/dungeon\/mobs\/835.png"},{"id":"269","level":"9","name":"\u0411\u0440\u043e\u0434\u044f\u0447\u0438\u0439 \u041c\u0435\u0445\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0413\u043e\u043b\u0435\u043c","type":"843","hp":"1200","stats":"sila=50|lovkost=0|inta=50|vinos=40|zoneAtack=2","adds":"krit=700|akrit=700|yvorot=0|ayvorot=700|powerKrit=20|proboiBron=0|contrydar=10|parirovanie=3|bronW1=525|bronW2=525|bronW3=525|bronW4=525|damage_min=65|damage_max=90|bronW=0|bronM=600|atacksW2=100|powerW2=100-110|bron1=20-35|bron2=30-45|bron3=30-45|bron4=20-35|bron5=20-35|abs_yvorot=0|abs_krit=5","priems":"","sex":"1","clan":"0","map":"ptp","align":"0","izlom":"0","img":"\/i\/dungeon\/mobs\/843.png"},{"id":"252","level":"8","name":"\u0414\u0430\u0440\u044c\u044f\u043d\u0430 \u041a\u043e\u0440\u0442","type":"826","hp":"3000","stats":"sila=50|lovkost=25|inta=15|vinos=30|intel=100|mydrost=100","adds":"krit=350|akrit=475|yvorot=350|ayvorot=475|powerKrit=0|proboiBron=0|contrydar=10|parirovanie=7|bronW1=475|bronW2=475|bronW3=475|bronW4=475|damage_min=45|damage_max=85|bronW=0|bronM=350|atacksW2=50|atacksM1=50|powerW2=100-110|powerM1=100-110|bron1=20-30|bron2=30-40|bron3=30-40|bron4=20-30|bron5=20-30","priems":"4","sex":"2","clan":"0","map":"ptp","align":"9","izlom":"1","img":"\/i\/dungeon\/mobs\/826.png"},{"id":"264","level":"9","name":"\u0414\u0440\u0435\u0432\u043d\u0435\u0435 \u041f\u0440\u043e\u043a\u043b\u044f\u0442\u0438\u0435 \u0413\u043b\u0443\u0431\u0438\u043d","type":"838","hp":"3000","stats":"sila=50|lovkost=15|inta=15|vinos=50","adds":"krit=350|akrit=575|yvorot=350|ayvorot=575|powerKrit=0|proboiBron=0|contrydar=10|parirovanie=1|bronW1=625|bronW2=625|bronW3=625|bronW4=625|damage_min=70|damage_max=110|bronW=0|bronM=600|atacksW3=50|atacksM1=50|powerW3=100-110|powerM1=100-110|bron1=40-50|bron2=50-65|bron3=50-65|bron4=40-50|bron5=40-50","priems":"","sex":"1","clan":"0","map":"ptp","align":"9","izlom":"0","img":"\/i\/dungeon\/mobs\/838.png"},{"id":"259","level":"10","name":"\u0414\u0443\u0445-\u0425\u0440\u0430\u043d\u0438\u0442\u0435\u043b\u044c","type":"833","hp":"2000","stats":"sila=1|lovkost=25|inta=25|vinos=50","adds":"krit=800|akrit=800|yvorot=800|ayvorot=800|powerKrit=20|proboiBron=0|contrydar=10|parirovanie=10|bronW1=500|bronW2=500|bronW3=500|bronW4=500|damage_min=85|damage_max=140|bronW=0|bronM=450|atacksW2=100|powerW2=100-110|bron1=20-35|bron2=30-45|bron3=30-45|bron4=20-35|bron5=20-35|abs_yvorot=3|abs_krit=3","priems":"","sex":"1","clan":"0","map":"ptp","align":"0","izlom":"0","img":"\/i\/dungeon\/mobs\/833.png"},{"id":"290","level":"9","name":"\u0414\u0443\u0448\u0430 \u041a\u0440\u043e\u0433\u0433\u0435\u043d\u0442\u0430\u0439\u043b\u0430","type":"864","hp":"2300","stats":"sila=50|lovkost=60|inta=60|vinos=60|intel=60|mydrost=60|zoneAtack=2","adds":"krit=600|akrit=850|yvorot=600|ayvorot=700|powerKrit=0|proboiBron=0|contrydar=10|parirovanie=10|bronW1=425|bronW2=600|bronW3=600|bronW4=600|damage_min=20|damage_max=45|bronW=0|bronM=650|atacksW3=100|powerW3=100-110|bron1=40-65|bron2=40-80|bron3=40-80|bron4=40-65|bron5=40-65","priems":"","sex":"2","clan":"0","map":"emerald","align":"9","izlom":"0","img":"\/i\/dungeon\/mobs\/864.png"},{"id":"274","level":"8","name":"\u0414\u0443\u0448\u0430 \u041a\u0440\u043e\u0433\u0433\u0435\u043d\u0442\u0430\u0439\u043b\u0430","type":"848","hp":"950","stats":"sila=25|lovkost=50|inta=50|vinos=50|intel=50|mydrost=50|zoneAtack=2","adds":"krit=750|akrit=900|yvorot=650|ayvorot=750|powerKrit=10|proboiBron=0|contrydar=10|parirovanie=10|bronW1=450|bronW2=650|bronW3=650|bronW4=650|damage_min=45|damage_max=90|bronW=0|bronM=575|atacksW3=100|powerW3=100-110|bron1=40-60|bron2=40-75|bron3=40-75|bron4=40-60|bron5=40-60","priems":"","sex":"2","clan":"0","map":"emerald","align":"0","izlom":"0","img":"\/i\/dungeon\/mobs\/848.png"},{"id":"277","level":"11","name":"\u0414\u0443\u0448\u0430 \u041a\u0440\u043e\u0433\u0433\u0435\u043d\u0442\u0430\u0439\u043b\u0430","type":"851","hp":"1800","stats":"sila=90|lovkost=120|inta=120|vinos=120|intel=120|mydrost=120|zoneAtack=2","adds":"krit=750|akrit=900|yvorot=650|ayvorot=750|powerKrit=10|proboiBron=0|contrydar=10|parirovanie=10|bronW1=400|bronW2=550|bronW3=550|bronW4=550|damage_min=25|damage_max=45|bronW=0|bronM=575|atacksW3=100|powerW3=100-110|bron1=45-80|bron2=45-80|bron3=45-80|bron4=45-65|bron5=45-65","priems":"","sex":"2","clan":"0","map":"emerald","align":"0","izlom":"0","img":"\/i\/dungeon\/mobs\/851.png"},{"id":"276","level":"10","name":"\u0414\u0443\u0448\u0430 \u041a\u0440\u043e\u0433\u0433\u0435\u043d\u0442\u0430\u0439\u043b\u0430","type":"850","hp":"1350","stats":"sila=70|lovkost=100|inta=100|vinos=100|intel=100|mydrost=100|zoneAtack=2","adds":"krit=700|akrit=900|yvorot=550|ayvorot=750|powerKrit=10|proboiBron=0|contrydar=10|parirovanie=10|bronW1=425|bronW2=600|bronW3=600|bronW4=600|damage_min=20|damage_max=40|bronW=0|bronM=600|atacksW3=100|powerW3=100-110|bron1=40-80|bron2=40-80|bron3=40-80|bron4=40-65|bron5=40-65","priems":"","sex":"2","clan":"0","map":"emerald","align":"0","izlom":"0","img":"\/i\/dungeon\/mobs\/850.png"},{"id":"275","level":"9","name":"\u0414\u0443\u0448\u0430 \u041a\u0440\u043e\u0433\u0433\u0435\u043d\u0442\u0430\u0439\u043b\u0430","type":"849","hp":"1150","stats":"sila=50|lovkost=60|inta=60|vinos=60|intel=60|mydrost=60|zoneAtack=2","adds":"krit=600|akrit=850|yvorot=600|ayvorot=700|powerKrit=0|proboiBron=0|contrydar=10|parirovanie=10|bronW1=400|bronW2=550|bronW3=550|bronW4=550|damage_min=15|damage_max=40|bronW=0|bronM=625|atacksW3=100|powerW3=100-110|bron1=40-65|bron2=40-80|bron3=40-80|bron4=40-65|bron5=40-65","priems":"","sex":"2","clan":"0","map":"emerald","align":"0","izlom":"0","img":"\/i\/dungeon\/mobs\/849.png"},{"id":"272","level":"10","name":"\u0416\u0438\u0440\u043d\u044b\u0439 \u0417\u043e\u043c\u0431\u0438","type":"846","hp":"2700","stats":"sila=50|lovkost=10|inta=10|vinos=50|intel=4","adds":"krit=300|akrit=700|yvorot=300|ayvorot=700|powerKrit=0|proboiBron=0|contrydar=10|parirovanie=10|bronW1=500|bronW2=500|bronW3=500|bronW4=500|damage_min=40|damage_max=80|bronW=0|bronM=575|atacksW3=100|powerW3=100-110|bron1=20-35|bron2=25-45|bron3=25-45|bron4=20-35|bron5=20-35","priems":"","sex":"1","clan":"0","map":"ptp","align":"0","izlom":"0","img":"\/i\/dungeon\/mobs\/846.png"},{"id":"260","level":"10","name":"\u0417\u0430\u0431\u043b\u0443\u0434\u0448\u0430\u044f \u0414\u0443\u0448\u0430","type":"834","hp":"900","stats":"sila=10|lovkost=25|inta=25|vinos=40|intel=25|mydrost=40","adds":"krit=800|akrit=800|yvorot=800|ayvorot=800|powerKrit=20|proboiBron=0|contrydar=10|parirovanie=10|bronW1=500|bronW2=500|bronW3=500|bronW4=500|damage_min=80|damage_max=140|bronW=0|bronM=375|atacksW2=100|powerW2=100-110|bron1=20-35|bron2=30-45|bron3=30-45|bron4=20-35|bron5=20-35|abs_yvorot=3|abs_krit=3","priems":"","sex":"2","clan":"0","map":"ptp","align":"0","izlom":"0","img":"\/i\/dungeon\/mobs\/834.png"},{"id":"251","level":"9","name":"\u0418\u0437\u0433\u043d\u0430\u043d\u043d\u0438\u043a \u041c\u0433\u043b\u044b","type":"825","hp":"2200","stats":"sila=50|lovkost=15|inta=15|vinos=70","adds":"krit=350|akrit=550|yvorot=250|ayvorot=550|powerKrit=0|proboiBron=0|contrydar=10|parirovanie=1|bronW1=425|bronW2=425|bronW3=300|bronW4=300|damage_min=45|damage_max=85|bronW=0|bronM=275|atacksW2=73|atacksW3=25|powerW3=100-110|powerW2=100-110|bron1=20-30|bron2=30-40|bron3=30-40|bron4=20-30|bron5=20-30","priems":"51|584|4|8|55|47|46","sex":"1","clan":"0","map":"ptp","align":"9","izlom":"1","img":"\/i\/dungeon\/mobs\/825.png"},{"id":"273","level":"10","name":"\u041a\u0430\u043c\u0435\u043d\u043d\u044b\u0439 \u0417\u043e\u043c\u0431\u0438","type":"847","hp":"2000","stats":"sila=50|lovkost=10|inta=10|vinos=75|intel=4","adds":"krit=300|akrit=700|yvorot=300|ayvorot=700|powerKrit=0|proboiBron=0|contrydar=10|parirovanie=10|bronW1=400|bronW2=400|bronW3=400|bronW4=400|damage_min=40|damage_max=80|bronW=0|bronM=525|atacksW3=100|powerW3=100-110|bron1=15-35|bron2=20-45|bron3=20-45|bron4=15-35|bron5=15-35","priems":"","sex":"1","clan":"0","map":"ptp","align":"0","izlom":"0","img":"\/i\/dungeon\/mobs\/847.png"},{"id":"263","level":"9","name":"\u041a\u0430\u043c\u0435\u043d\u043d\u044b\u0439 \u0421\u0442\u0440\u0430\u0436","type":"837","hp":"7000","stats":"sila=75|lovkost=20|inta=0|vinos=55","adds":"krit=50|akrit=800|yvorot=100|ayvorot=800|powerKrit=0|proboiBron=0|contrydar=10|parirovanie=10|bronW1=750|bronW2=750|bronW3=750|bronW4=750|damage_min=110|damage_max=150|bronW=0|bronM=675|atacksW3=100|powerW3=150-160|bron1=50-65|bron2=50-65|bron3=50-65|bron4=50-65|bron5=50-65|abs_yvorot=1","priems":"","sex":"1","clan":"0","map":"ptp","align":"9","izlom":"0","img":"\/i\/dungeon\/mobs\/837.png"},{"id":"289","level":"14","name":"\u041a\u043e\u0440\u043e\u043b\u044c \u0412\u0430\u043b\u043b\u0443\u0430\u0440","type":"863","hp":"6000","stats":"sila=200|lovkost=200|inta=200|vinos=200|zoneAtack=2","adds":"krit=700|akrit=700|yvorot=700|ayvorot=700|powerKrit=30|proboiBron=10|contrydar=10|parirovanie=20|bronW1=500|bronW2=650|bronW3=650|bronW4=650|damage_min=50|damage_max=100|bronW=0|bronM=650|atacksW3=100|powerW3=100-110|bron1=50-100|bron2=65-120|bron3=65-120|bron4=50-100|bron5=50-100","priems":"","sex":"1","clan":"0","map":"emerald","align":"0","izlom":"0","img":"\/i\/dungeon\/mobs\/863.png"},{"id":"271","level":"11","name":"\u041c\u0430\u0441\u0442\u0435\u0440 \u0413\u0440\u0438\u0442","type":"845","hp":"13000","stats":"sila=100|lovkost=25|inta=25|vinos=25|intel=25","adds":"krit=550|akrit=875|yvorot=550|ayvorot=850|powerKrit=10|proboiBron=0|contrydar=10|parirovanie=5|bronW1=550|bronW2=550|bronW3=550|bronW4=550|damage_min=70|damage_max=140|bronW=0|bronM=560|atacksW3=100|powerW3=100-110|bron1=20-35|bron2=30-45|bron3=30-45|bron4=20-35|bron5=20-35|abs_yvorot=2|abs_krit=2","priems":"","sex":"1","clan":"0","map":"ptp","align":"9","izlom":"0","img":"\/i\/dungeon\/mobs\/845.png"},{"id":"255","level":"8","name":"\u041c\u0430\u0443\u043b \u0421\u0447\u0430\u0441\u0442\u043b\u0438\u0432\u0447\u0438\u043a","type":"829","hp":"4000","stats":"sila=45|lovkost=30|inta=25|vinos=30","adds":"krit=375|akrit=450|yvorot=350|ayvorot=450|powerKrit=5|proboiBron=0|contrydar=10|parirovanie=5|bronW1=275|bronW2=275|bronW3=275|bronW4=275|damage_min=35|damage_max=65|bronW=0|bronM=275|atacksW2=100|powerW2=100-110|bron1=20-30|bron2=30-40|bron3=30-40|bron4=20-30|bron5=20-30","priems":"4|55|46|47","sex":"1","clan":"0","map":"ptp","align":"9","izlom":"1","img":"\/i\/dungeon\/mobs\/829.png"},{"id":"267","level":"9","name":"\u041c\u0435\u0445\u0430\u043d\u0438\u043a","type":"841","hp":"1530","stats":"sila=50|lovkost=15|inta=15|vinos=40|intel=15|zoneBlock=-1","adds":"krit=450|akrit=675|yvorot=450|ayvorot=675|powerKrit=10|proboiBron=0|contrydar=10|parirovanie=5|bronW1=425|bronW2=425|bronW3=425|bronW4=425|damage_min=65|damage_max=90|bronW=0|bronM=525|atacksW3=100|powerW3=100-110|bron1=20-35|bron2=30-45|bron3=30-45|bron4=20-35|bron5=20-35|abs_yvorot=2|abs_krit=2","priems":"","sex":"1","clan":"0","map":"ptp","align":"0","izlom":"0","img":"\/i\/dungeon\/mobs\/841.png"},{"id":"266","level":"9","name":"\u041c\u0435\u0445\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0413\u043e\u043b\u0435\u043c","type":"840","hp":"1200","stats":"sila=50|lovkost=0|inta=50|vinos=40|zoneAtack=2","adds":"krit=900|akrit=900|yvorot=0|ayvorot=900|powerKrit=20|proboiBron=0|contrydar=10|parirovanie=3|bronW1=625|bronW2=625|bronW3=625|bronW4=625|damage_min=70|damage_max=100|bronW=0|bronM=600|atacksW2=100|powerW2=100-110|bron1=30-45|bron2=40-55|bron3=40-55|bron4=30-45|bron5=30-45|abs_yvorot=0|abs_krit=5","priems":"","sex":"1","clan":"0","map":"ptp","align":"0","izlom":"0","img":"\/i\/dungeon\/mobs\/840.png"},{"id":"268","level":"10","name":"\u041c\u0435\u0445\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u041e\u0445\u0440\u0430\u043d\u043d\u0438\u043a","type":"842","hp":"1600","stats":"sila=50|lovkost=20|inta=20|vinos=50","adds":"krit=400|akrit=825|yvorot=400|ayvorot=825|powerKrit=20|proboiBron=0|contrydar=10|parirovanie=5|bronW1=600|bronW2=600|bronW3=600|bronW4=600|damage_min=75|damage_max=115|bronW=0|bronM=600|atacksW2=100|powerW2=100-110|bron1=40-55|bron2=40-55|bron3=40-55|bron4=30-45|bron5=30-45|abs_yvorot=1|abs_krit=1","priems":"","sex":"1","clan":"0","map":"ptp","align":"0","izlom":"0","img":"\/i\/dungeon\/mobs\/842.png"},{"id":"265","level":"10","name":"\u041c\u0435\u0445\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0443\u0431\u0438\u0439\u0446\u0430","type":"839","hp":"2300","stats":"sila=60|lovkost=20|inta=0|vinos=45","adds":"krit=0|akrit=550|yvorot=850|ayvorot=875|powerKrit=0|proboiBron=0|contrydar=10|parirovanie=7|bronW1=625|bronW2=625|bronW3=625|bronW4=625|damage_min=80|damage_max=110|bronW=0|bronM=600|atacksW2=100|powerW2=100-110|bron1=30-45|bron2=40-55|bron3=40-55|bron4=40-55|bron5=30-45|abs_yvorot=3|abs_krit=0","priems":"","sex":"1","clan":"0","map":"ptp","align":"0","izlom":"0","img":"\/i\/dungeon\/mobs\/839.png"},{"id":"262","level":"11","name":"\u041e\u0434\u0435\u0440\u0436\u0438\u043c\u044b\u0439 \u0414\u0443\u0445\u043e\u043c \u0413\u043e\u043b\u0435\u043c","type":"836","hp":"10000","stats":"sila=75|lovkost=50|inta=25|vinos=50","adds":"krit=350|akrit=575|yvorot=550|ayvorot=550|powerKrit=10|proboiBron=0|contrydar=10|parirovanie=5|bronW1=475|bronW2=475|bronW3=475|bronW4=475|damage_min=50|damage_max=90|bronW=0|bronM=360|atacksW3=100|powerW3=100-110|bron1=20-35|bron2=30-45|bron3=30-45|bron4=20-35|bron5=20-35|abs_yvorot=2|abs_krit=2","priems":"","sex":"1","clan":"0","map":"ptp","align":"0","izlom":"0","img":"\/i\/dungeon\/mobs\/836.png"},{"id":"282","level":"9","name":"\u041f\u0430\u043c\u044f\u0442\u044c \u041a\u0440\u043e\u0433\u0433\u0435\u043d\u0442\u0430\u0439\u043b\u0430","type":"856","hp":"2500","stats":"sila=40|lovkost=50|inta=50|vinos=50|intel=100|mydrost=65","adds":"krit=750|akrit=850|yvorot=500|ayvorot=750|powerKrit=0|proboiBron=0|contrydar=10|parirovanie=10|bronW1=450|bronW2=550|bronW3=550|bronW4=550|damage_min=25|damage_max=50|bronW=0|bronM=575|atacksW2=100|powerW2=100-110|bron1=40-60|bron2=40-75|bron3=40-75|bron4=40-60|bron5=40-60","priems":"","sex":"2","clan":"0","map":"emerald","align":"0","izlom":"0","img":"\/i\/dungeon\/mobs\/856.png"},{"id":"283","level":"10","name":"\u041f\u0430\u043c\u044f\u0442\u044c \u041a\u0440\u043e\u0433\u0433\u0435\u043d\u0442\u0430\u0439\u043b\u0430","type":"857","hp":"2000","stats":"sila=40|lovkost=50|inta=50|vinos=50|intel=50|mydrost=65","adds":"krit=775|akrit=875|yvorot=500|ayvorot=775|powerKrit=0|proboiBron=0|contrydar=10|parirovanie=10|bronW1=450|bronW2=550|bronW3=550|bronW4=550|damage_min=30|damage_max=55|bronW=0|bronM=650|atacksW2=100|powerW2=100-110|bron1=45-70|bron2=45-80|bron3=45-80|bron4=50-70|bron5=50-70","priems":"","sex":"2","clan":"0","map":"emerald","align":"0","izlom":"0","img":"\/i\/dungeon\/mobs\/857.png"},{"id":"284","level":"11","name":"\u041f\u0430\u043c\u044f\u0442\u044c \u041a\u0440\u043e\u0433\u0433\u0435\u043d\u0442\u0430\u0439\u043b\u0430","type":"858","hp":"2400","stats":"sila=60|lovkost=70|inta=70|vinos=70|intel=100|mydrost=80","adds":"krit=800|akrit=925|yvorot=500|ayvorot=825|powerKrit=0|proboiBron=0|contrydar=10|parirovanie=10|bronW1=500|bronW2=600|bronW3=600|bronW4=600|damage_min=30|damage_max=55|bronW=0|bronM=700|atacksW2=100|powerW2=100-110|bron1=45-75|bron2=45-85|bron3=45-85|bron4=50-75|bron5=50-75","priems":"","sex":"2","clan":"0","map":"emerald","align":"0","izlom":"0","img":"\/i\/dungeon\/mobs\/858.png"},{"id":"293","level":"9","name":"\u041f\u0430\u043c\u044f\u0442\u044c \u041a\u0440\u043e\u0433\u0433\u0435\u043d\u0442\u0430\u0439\u043b\u0430","type":"867","hp":"5000","stats":"sila=40|lovkost=50|inta=50|vinos=50|intel=100|mydrost=65","adds":"krit=750|akrit=900|yvorot=500|ayvorot=775|powerKrit=0|proboiBron=0|contrydar=10|parirovanie=10|bronW1=475|bronW2=575|bronW3=575|bronW4=575|damage_min=35|damage_max=60|bronW=0|bronM=625|atacksW2=100|powerW2=100-110|bron1=40-65|bron2=40-80|bron3=40-80|bron4=40-65|bron5=40-65","priems":"","sex":"2","clan":"0","map":"emerald","align":"9","izlom":"0","img":"\/i\/dungeon\/mobs\/867.png"},{"id":"243","level":"8","name":"\u041f\u0440\u043e\u043a\u043b\u044f\u0442\u0438\u0435 \u0413\u043b\u0443\u0431\u0438\u043d","type":"817","hp":"800","stats":"sila=80|lovkost=3|inta=3|vinos=40","adds":"krit=100|akrit=300|yvorot=100|ayvorot=300|powerKrit=0|proboiBron=0|contrydar=10|parirovanie=1|bronW1=300|bronW2=300|bronW3=300|bronW4=300|damage_min=1|damage_max=10|bronW=0|bronM=300|atacksW3=50|atacksM3=50|powerW3=100-110|powerM3=100-110|bron1=25-35|bron2=35-50|bron3=35-50|bron4=25-35|bron5=25-35","priems":"","sex":"1","clan":"0","map":"ptp","align":"0","izlom":"1","img":"\/i\/dungeon\/mobs\/817.png"},{"id":"236","level":"6","name":"\u041f\u0440\u043e\u043a\u043b\u044f\u0442\u0438\u0435 \u0413\u043b\u0443\u0431\u0438\u043d","type":"810","hp":"250","stats":"sila=30|lovkost=20|inta=20|vinos=25","adds":"krit=225|akrit=325|yvorot=125|ayvorot=350|powerKrit=0|proboiBron=5|contrydar=10|parirovanie=3|bronW1=225|bronW2=225|bronW3=225|bronW4=225|damage_min=15|damage_max=30|bronW=0|bronM=225|atacksW3=75|atacksW5=25|powerW3=100-110|bron1=25-40|bron2=35-50|bron3=35-50|bron4=25-40|bron5=25-40","priems":"","sex":"1","clan":"0","map":"ptp","align":"0","izlom":"1","img":"\/i\/dungeon\/mobs\/810.png"},{"id":"238","level":"7","name":"\u041f\u0440\u043e\u043a\u043b\u044f\u0442\u0438\u0435 \u0413\u043b\u0443\u0431\u0438\u043d","type":"812","hp":"500","stats":"sila=40|lovkost=15|inta=30|vinos=25","adds":"krit=325|akrit=325|yvorot=100|ayvorot=200|powerKrit=5|proboiBron=5|contrydar=10|parirovanie=3|bronW1=225|bronW2=225|bronW3=225|bronW4=225|damage_min=20|damage_max=40|bronW=0|bronM=225|atacksW3=75|atacksW5=25|powerW3=100-110|bron1=25-40|bron2=35-50|bron3=35-50|bron4=25-40|bron5=25-40","priems":"","sex":"1","clan":"0","map":"ptp","align":"0","izlom":"1","img":"\/i\/dungeon\/mobs\/812.png"},{"id":"244","level":"7","name":"\u041f\u0440\u043e\u043a\u043b\u044f\u0442\u0438\u0435 \u0413\u043b\u0443\u0431\u0438\u043d","type":"818","hp":"1500","stats":"sila=40|lovkost=15|inta=30|vinos=25","adds":"krit=325|akrit=325|yvorot=100|ayvorot=200|powerKrit=5|proboiBron=5|contrydar=10|parirovanie=3|bronW1=225|bronW2=225|bronW3=225|bronW4=225|damage_min=20|damage_max=40|bronW=0|bronM=225|atacksW3=75|atacksW5=25|powerW3=100-110|bron1=25-40|bron2=35-50|bron3=35-50|bron4=25-40|bron5=25-40","priems":"","sex":"1","clan":"0","map":"ptp","align":"9","izlom":"1","img":"\/i\/dungeon\/mobs\/818.png"},{"id":"249","level":"9","name":"\u041f\u0440\u043e\u043a\u043b\u044f\u0442\u0438\u0435 \u0413\u043b\u0443\u0431\u0438\u043d","type":"823","hp":"1000","stats":"sila=50|lovkost=15|inta=15|vinos=50","adds":"krit=150|akrit=375|yvorot=150|ayvorot=375|powerKrit=0|proboiBron=0|contrydar=10|parirovanie=1|bronW1=425|bronW2=425|bronW3=425|bronW4=425|damage_min=30|damage_max=55|bronW=0|bronM=400|atacksW3=50|atacksM1=50|powerW3=100-110|powerM1=100-110|bron1=40-50|bron2=50-65|bron3=50-65|bron4=40-50|bron5=40-50","priems":"","sex":"1","clan":"0","map":"ptp","align":"0","izlom":"1","img":"\/i\/dungeon\/mobs\/823.png"},{"id":"250","level":"9","name":"\u041f\u0440\u043e\u043a\u043b\u044f\u0442\u0438\u0435 \u0413\u043b\u0443\u0431\u0438\u043d","type":"824","hp":"2000","stats":"sila=50|lovkost=15|inta=15|vinos=50","adds":"krit=150|akrit=375|yvorot=150|ayvorot=375|powerKrit=0|proboiBron=0|contrydar=10|parirovanie=1|bronW1=425|bronW2=425|bronW3=425|bronW4=425|damage_min=30|damage_max=55|bronW=0|bronM=400|atacksW3=50|atacksM1=50|powerW3=100-110|powerM1=100-110|bron1=40-50|bron2=50-65|bron3=50-65|bron4=40-50|bron5=40-50","priems":"","sex":"1","clan":"0","map":"ptp","align":"9","izlom":"1","img":"\/i\/dungeon\/mobs\/824.png"},{"id":"253","level":"9","name":"\u041f\u0443\u0441\u0442\u044b\u043d\u043d\u0438\u043a \u0410\u0442\u0430\u043c\u0430\u043d","type":"827","hp":"550","stats":"sila=50|lovkost=55|inta=15|vinos=30","adds":"krit=200|akrit=375|yvorot=400|ayvorot=350|powerKrit=5|proboiBron=10|contrydar=15|parirovanie=7|bronW1=275|bronW2=275|bronW3=275|bronW4=275|damage_min=25|damage_max=50|bronW=50|bronM=225|atacksW2=100|powerW2=100-110|bron1=25-35|bron2=35-50|bron3=35-50|bron4=25-35|bron5=25-35","priems":"8|59","sex":"1","clan":"0","map":"ptp","align":"9","izlom":"1","img":"\/i\/dungeon\/mobs\/827.png"},{"id":"248","level":"8","name":"\u041f\u0443\u0441\u0442\u044b\u043d\u043d\u0438\u043a \u0410\u0442\u0430\u043c\u0430\u043d","type":"822","hp":"750","stats":"sila=40|lovkost=50|inta=35|vinos=30","adds":"krit=200|akrit=375|yvorot=300|ayvorot=350|powerKrit=5|proboiBron=10|contrydar=15|parirovanie=7|bronW1=325|bronW2=325|bronW3=325|bronW4=325|damage_min=25|damage_max=50|bronW=0|bronM=350|atacksW2=50|atacksM3=50|powerW2=100-110|powerM3=100-110|bron1=20-30|bron2=30-45|bron3=30-45|bron4=20-30|bron5=20-30","priems":"8|59","sex":"1","clan":"0","map":"ptp","align":"9","izlom":"1","img":"\/i\/dungeon\/mobs\/822.png"},{"id":"242","level":"8","name":"\u041f\u0443\u0441\u0442\u044b\u043d\u043d\u0438\u043a \u0410\u0442\u0430\u043c\u0430\u043d","type":"816","hp":"375","stats":"sila=40|lovkost=50|inta=35|vinos=30","adds":"krit=200|akrit=375|yvorot=300|ayvorot=350|powerKrit=5|proboiBron=10|contrydar=15|parirovanie=7|bronW1=325|bronW2=325|bronW3=325|bronW4=325|damage_min=5|damage_max=10|bronW=0|bronM=350|atacksW2=50|atacksM3=50|powerW2=100-110|powerM3=100-110|bron1=20-30|bron2=30-45|bron3=30-45|bron4=20-30|bron5=20-30","priems":"8|59","sex":"1","clan":"0","map":"ptp","align":"0","izlom":"1","img":"\/i\/dungeon\/mobs\/816.png"},{"id":"239","level":"7","name":"\u041f\u0443\u0441\u0442\u044b\u043d\u043d\u0438\u043a \u041c\u0430\u043d\u044c\u044f\u043a","type":"813","hp":"500","stats":"sila=35|lovkost=20|inta=30|vinos=30","adds":"krit=300|akrit=300|yvorot=100|ayvorot=275|powerKrit=10|proboiBron=5|contrydar=10|parirovanie=3|damage_min=20|damage_max=40|bronW1=250|bronW2=250|bronW3=250|bronW4=250|bronW=0|bronM=250|atacksW2=100|powerW1=100-110|bron1=25-35|bron2=35-50|bron3=35-50|bron4=25-35|bron5=25-35","priems":"","sex":"1","clan":"0","map":"ptp","align":"0","izlom":"1","img":"\/i\/dungeon\/mobs\/813.png"},{"id":"240","level":"6","name":"\u041f\u0443\u0441\u0442\u044b\u043d\u043d\u0438\u043a \u041c\u0430\u043d\u044c\u044f\u043a","type":"814","hp":"200","stats":"sila=30|lovkost=20|inta=25|vinos=25|zoneAtack=1","adds":"krit=275|akrit=275|yvorot=100|ayvorot=275|powerKrit=10|proboiBron=5|contrydar=10|parirovanie=3|bronW1=225|bronW2=225|bronW3=225|bronW4=225|damage_min=15|damage_max=30|bronW=0|bronM=225|atacksW1=25|atacksW2=25|atacksW3=25|atacksW4=25|powerW1=100-110|powerW2=100-110|powerW3=100-110|powerW4=100-110|bron1=20-30|bron2=30-45|bron3=30-45|bron4=20-30|bron5=20-30","priems":"","sex":"1","clan":"0","map":"ptp","align":"0","izlom":"1","img":"\/i\/dungeon\/mobs\/814.png"},{"id":"256","level":"8","name":"\u041f\u0443\u0441\u0442\u044b\u043d\u043d\u0438\u043a \u041c\u0430\u043d\u044c\u044f\u043a","type":"830","hp":"1400","stats":"sila=70|lovkost=20|inta=50|vinos=30","adds":"krit=250|akrit=275|yvorot=100|ayvorot=275|powerKrit=10|proboiBron=5|contrydar=10|parirovanie=3|damage_min=20|damage_max=40|bronW=225|bronM=275|atacksW2=100|powerW2=100-110|bron1=20-30|bron2=30-45|bron3=30-45|bron4=20-30|bron5=20-30","priems":"","sex":"1","clan":"0","map":"ptp","align":"9","izlom":"1","img":"\/i\/dungeon\/mobs\/830.png"},{"id":"245","level":"7","name":"\u041f\u0443\u0441\u0442\u044b\u043d\u043d\u0438\u043a \u041c\u0430\u043d\u044c\u044f\u043a","type":"819","hp":"1000","stats":"sila=35|lovkost=20|inta=30|vinos=30","adds":"krit=300|akrit=300|yvorot=100|ayvorot=275|powerKrit=10|proboiBron=5|contrydar=10|parirovanie=3|damage_min=20|damage_max=40|bronW1=250|bronW2=250|bronW3=250|bronW4=250|bronW=0|bronM=250|atacksW2=100|powerW1=100-110|bron1=25-35|bron2=35-50|bron3=35-50|bron4=25-35|bron5=25-35","priems":"","sex":"1","clan":"0","map":"ptp","align":"9","izlom":"1","img":"\/i\/dungeon\/mobs\/819.png"},{"id":"246","level":"8","name":"\u041f\u0443\u0441\u0442\u044b\u043d\u043d\u0438\u043a \u041c\u0430\u043d\u044c\u044f\u043a","type":"820","hp":"700","stats":"sila=70|lovkost=20|inta=50|vinos=30","adds":"krit=250|akrit=275|yvorot=100|ayvorot=275|powerKrit=10|proboiBron=5|contrydar=10|parirovanie=3|damage_min=20|damage_max=40|bronW=225|bronM=275|atacksW2=75|atacksW1=25|powerW2=100-110|powerW1=100-110|bron1=20-30|bron2=30-45|bron3=30-45|bron4=20-30|bron5=20-30","priems":"","sex":"1","clan":"0","map":"ptp","align":"0","izlom":"1","img":"\/i\/dungeon\/mobs\/820.png"},{"id":"247","level":"8","name":"\u041f\u0443\u0441\u0442\u044b\u043d\u043d\u0438\u043a \u0423\u0431\u0438\u0439\u0446\u0430","type":"821","hp":"500","stats":"sila=30|lovkost=25|inta=50|vinos=30","adds":"krit=350|akrit=425|yvorot=100|ayvorot=275|powerKrit=10|proboiBron=5|contrydar=10|parirovanie=3|damage_min=35|damage_max=60|bronW=300|bronM=300|atacksW2=50|atacksM3=50|powerW2=100-110|powerM3=100-110|bron1=25-35|bron2=35-50|bron3=35-50|bron4=25-35|bron5=25-35","priems":"","sex":"1","clan":"0","map":"ptp","align":"0","izlom":"1","img":"\/i\/dungeon\/mobs\/821.png"},{"id":"241","level":"6","name":"\u041f\u0443\u0441\u0442\u044b\u043d\u043d\u0438\u043a \u0423\u0431\u0438\u0439\u0446\u0430","type":"815","hp":"250","stats":"sila=30|lovkost=10|inta=40|vinos=25","adds":"krit=275|akrit=425|yvorot=100|ayvorot=275|powerKrit=10|proboiBron=5|contrydar=10|parirovanie=3|damage_min=15|damage_max=30|bronW=225|bronM=225|atacksW4=100|powerW4=100-110|bron1=20-30|bron2=30-45|bron3=30-45|bron4=20-30|bron5=20-30","priems":"","sex":"1","clan":"0","map":"ptp","align":"0","izlom":"1","img":"\/i\/dungeon\/mobs\/815.png"},{"id":"258","level":"7","name":"\u041f\u0443\u0441\u0442\u044b\u043d\u043d\u0438\u043a \u0423\u0431\u0438\u0439\u0446\u0430","type":"832","hp":"750","stats":"sila=50|lovkost=25|inta=25|vinos=30","adds":"krit=250|akrit=350|yvorot=160|ayvorot=400|powerKrit=5|proboiBron=5|contrydar=10|parirovanie=5|bronW1=250|bronW2=250|bronW3=250|bronW4=250|damage_min=30|damage_max=55|bronW=0|bronM=200|atacksW2=100|powerW2=100-110|bron1=20-30|bron2=30-45|bron3=30-45|bron4=20-30|bron5=20-30","priems":"","sex":"1","clan":"0","map":"ptp","align":"9","izlom":"1","img":"\/i\/dungeon\/mobs\/832.png"},{"id":"257","level":"8","name":"\u041f\u0443\u0441\u0442\u044b\u043d\u043d\u0438\u043a \u0423\u0431\u0438\u0439\u0446\u0430","type":"831","hp":"1000","stats":"sila=30|lovkost=15|inta=25|vinos=30","adds":"krit=325|akrit=375|yvorot=100|ayvorot=300|powerKrit=10|proboiBron=5|contrydar=10|parirovanie=3|damage_min=35|damage_max=60|bronW=250|bronM=275|atacksW2=100|powerW2=100-110|bron1=20-30|bron2=30-45|bron3=30-45|bron4=20-30|bron5=20-30","priems":"","sex":"1","clan":"0","map":"ptp","align":"9","izlom":"1","img":"\/i\/dungeon\/mobs\/831.png"},{"id":"237","level":"7","name":"\u041f\u0443\u0441\u0442\u044b\u043d\u043d\u0438\u043a \u0423\u0431\u0438\u0439\u0446\u0430","type":"811","hp":"375","stats":"sila=50|lovkost=25|inta=25|vinos=30","adds":"krit=250|akrit=350|yvorot=160|ayvorot=400|powerKrit=5|proboiBron=5|contrydar=10|parirovanie=5|bronW1=250|bronW2=250|bronW3=250|bronW4=250|damage_min=20|damage_max=40|bronW=0|bronM=200|atacksW4=100|powerW4=100-110|bron1=20-30|bron2=30-45|bron3=30-45|bron4=20-30|bron5=20-30","priems":"","sex":"1","clan":"0","map":"ptp","align":"0","izlom":"1","img":"\/i\/dungeon\/mobs\/811.png"},{"id":"291","level":"9","name":"\u0421\u0438\u043b\u0430 \u041a\u0440\u043e\u0433\u0433\u0435\u043d\u0442\u0430\u0439\u043b\u0430","type":"865","hp":"3000","stats":"sila=95|lovkost=65|inta=65|vinos=75|zoneAtack=2","adds":"krit=1000|akrit=775|yvorot=350|ayvorot=825|powerKrit=0|proboiBron=0|contrydar=10|parirovanie=10|bronW1=450|bronW2=625|bronW3=625|bronW4=625|damage_min=30|damage_max=60|bronW=0|bronM=650|atacksW2=100|powerW2=100-110|bron1=45-70|bron2=45-85|bron3=45-85|bron4=45-70|bron5=45-70","priems":"","sex":"2","clan":"0","map":"emerald","align":"9","izlom":"0","img":"\/i\/dungeon\/mobs\/865.png"},{"id":"288","level":"11","name":"\u0421\u0438\u043b\u0430 \u041a\u0440\u043e\u0433\u0433\u0435\u043d\u0442\u0430\u0439\u043b\u0430","type":"862","hp":"2400","stats":"sila=160|lovkost=85|inta=85|vinos=120|zoneAtack=2","adds":"krit=1150|akrit=850|yvorot=400|ayvorot=875|powerKrit=0|proboiBron=0|contrydar=10|parirovanie=10|bronW1=500|bronW2=675|bronW3=675|bronW4=675|damage_min=45|damage_max=75|bronW=0|bronM=650|atacksW2=100|powerW2=100-110|bron1=55-75|bron2=55-90|bron3=55-90|bron4=50-75|bron5=55-75","priems":"","sex":"2","clan":"0","map":"emerald","align":"0","izlom":"0","img":"\/i\/dungeon\/mobs\/862.png"},{"id":"287","level":"10","name":"\u0421\u0438\u043b\u0430 \u041a\u0440\u043e\u0433\u0433\u0435\u043d\u0442\u0430\u0439\u043b\u0430","type":"861","hp":"1800","stats":"sila=125|lovkost=65|inta=65|vinos=100|zoneAtack=2","adds":"krit=1100|akrit=800|yvorot=350|ayvorot=850|powerKrit=0|proboiBron=0|contrydar=10|parirovanie=10|bronW1=450|bronW2=650|bronW3=650|bronW4=650|damage_min=40|damage_max=70|bronW=0|bronM=650|atacksW2=100|powerW2=100-110|bron1=50-70|bron2=50-85|bron3=50-85|bron4=50-70|bron5=50-70","priems":"","sex":"2","clan":"0","map":"emerald","align":"0","izlom":"0","img":"\/i\/dungeon\/mobs\/861.png"},{"id":"286","level":"9","name":"\u0421\u0438\u043b\u0430 \u041a\u0440\u043e\u0433\u0433\u0435\u043d\u0442\u0430\u0439\u043b\u0430","type":"860","hp":"1500","stats":"sila=95|lovkost=65|inta=65|vinos=75|zoneAtack=2","adds":"krit=900|akrit=750|yvorot=350|ayvorot=800|powerKrit=0|proboiBron=0|contrydar=10|parirovanie=10|bronW1=425|bronW2=625|bronW3=625|bronW4=625|damage_min=25|damage_max=55|bronW=0|bronM=625|atacksW2=100|powerW2=100-110|bron1=45-65|bron2=45-80|bron3=45-80|bron4=45-65|bron5=45-65","priems":"","sex":"2","clan":"0","map":"emerald","align":"0","izlom":"0","img":"\/i\/dungeon\/mobs\/860.png"},{"id":"285","level":"8","name":"\u0421\u0438\u043b\u0430 \u041a\u0440\u043e\u0433\u0433\u0435\u043d\u0442\u0430\u0439\u043b\u0430","type":"859","hp":"1200","stats":"sila=70|lovkost=40|inta=40|vinos=50","adds":"krit=1000|akrit=700|yvorot=350|ayvorot=750|powerKrit=0|proboiBron=0|contrydar=10|parirovanie=10|bronW1=400|bronW2=600|bronW3=600|bronW4=600|damage_min=30|damage_max=60|bronW=0|bronM=575|atacksW2=100|powerW2=100-110|bron1=40-60|bron2=40-75|bron3=40-75|bron4=40-60|bron5=40-60","priems":"","sex":"2","clan":"0","map":"emerald","align":"0","izlom":"0","img":"\/i\/dungeon\/mobs\/859.png"},{"id":"254","level":"9","name":"\u0421\u0442\u0440\u0430\u0436 \u041a\u0440\u0430\u043d\u0442\u043e\u043d","type":"828","hp":"2500","stats":"sila=50|lovkost=25|inta=10|vinos=30|zoneAtack=5","adds":"krit=400|akrit=500|yvorot=100|ayvorot=450|powerKrit=20|proboiBron=5|contrydar=0|parirovanie=5|damage_min=35|damage_max=65|bronW=275|bronM=275|atacksW1=50|atacksW2=50|powerW1=100-110|powerW2=100-110|bron1=25-35|bron2=35-45|bron3=35-45|bron4=25-35|bron5=25-35","priems":"9|51|88|46|7|47","sex":"1","clan":"0","map":"ptp","align":"9","izlom":"1","img":"\/i\/dungeon\/mobs\/828.png"},{"id":"270","level":"11","name":"\u0421\u0442\u0440\u0430\u0436 \u0421\u043e\u043a\u0440\u043e\u0432\u0438\u0449","type":"844","hp":"7000","stats":"sila=50|lovkost=25|inta=25|vinos=50","adds":"krit=450|akrit=850|yvorot=450|ayvorot=850|powerKrit=10|proboiBron=0|contrydar=10|parirovanie=7|bronW1=700|bronW2=700|bronW3=700|bronW4=700|damage_min=80|damage_max=120|bronW=0|bronM=760|atacksW3=100|powerW3=100-110|bron1=20-35|bron2=30-45|bron3=30-45|bron4=20-35|bron5=20-35|abs_yvorot=2|abs_krit=2","priems":"","sex":"1","clan":"0","map":"ptp","align":"9","izlom":"0","img":"\/i\/dungeon\/mobs\/844.png"},{"id":"294","level":"9","name":"\u0422\u0435\u0441\u0442_123","type":"900","hp":"5000","stats":"sila=40|lovkost=50|inta=50|vinos=50|intel=100|mydrost=65","adds":"krit=750|akrit=900|yvorot=500|ayvorot=775|powerKrit=0|proboiBron=0|contrydar=10|parirovanie=10|bronW1=475|bronW2=575|bronW3=575|bronW4=575|damage_min=35|damage_max=60|bronW=0|bronM=625|atacksW2=100|powerW2=100-110|bron1=40-65|bron2=40-80|bron3=40-80|bron4=40-65|bron5=40-65","priems":"","sex":"2","clan":"0","map":"emerald","align":"9","izlom":"0","img":"\/i\/dungeon\/mobs\/900.png"}];

  botsRouter.get('/', function(req, res) {
    res.send(items);
  });

  botsRouter.post('/', function(req, res) {
    res.status(201).send(Object.assign(items[0], {id: Date.now()}));
  });

  botsRouter.get('/:id', function(req, res) {
    res.send(items.find(function(item){
        return item.id === req.params.id;
      }));
  });

  botsRouter.put('/:id', function(req, res) {
    res.send(items.find(function(item){
        return item.id === req.params.id;
      }));
  });

  botsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/bots', botsRouter);
};
