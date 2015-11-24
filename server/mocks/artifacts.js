module.exports = function(app) {
  var express = require('express');
  var artifactsRouter = express.Router();
  var items = [{"id":"8","name":" \u041b\u043e\u0432\u0443\u0448\u043a\u0430 \u043d\u0430\u043f\u0430\u0434\u0435\u043d\u0438\u044f","type":"8","img":"\/i\/labirint\/objects\/attentionpoint_red1.gif","aspect":"6"},{"id":"13","name":" \u041b\u043e\u0432\u0443\u0448\u043a\u0430 \u0441 \u043f\u0440\u043e\u043a\u043b\u044f\u0442\u0438\u0435\u043c","type":"13","img":"\/i\/labirint\/objects\/attentionpoint_red1.gif","aspect":"9"},{"id":"32","name":"\u0410\u043b\u0442\u0430\u0440\u044c \u041e\u0441\u043a\u043e\u043b\u043a\u043e\u0432","type":"45","img":"\/i\/labirint\/objects\/altar01.png","aspect":"1"},{"id":"31","name":"\u0412\u0445\u043e\u0434 \u043a \u0413\u0440\u0438\u0442\u0443","type":"92","img":"\/i\/labirint\/objects\/vhod_grit.png","aspect":"2"},{"id":"6","name":"\u0412\u044b\u0431\u043e\u0438\u043d\u0430","type":"6","img":"\/i\/labirint\/objects\/duffer.png","aspect":"4"},{"id":"27","name":"\u0413\u043e\u0441\u0442\u0435\u0432\u043e\u0439 \u0441\u0443\u043d\u0434\u0443\u0447\u043e\u043a","type":"93","img":"\/i\/labirint\/objects\/smag_collect1_1.png","aspect":"1"},{"id":"14","name":"\u041a\u043b\u044e\u0447 \u21161","type":"4","img":"\/i\/labirint\/objects\/key1.gif","aspect":"1"},{"id":"15","name":"\u041a\u043b\u044e\u0447 \u21162","type":"11","img":"\/i\/labirint\/objects\/key2.gif","aspect":"1"},{"id":"24","name":"\u041b\u0435\u0441\u0442\u043d\u0438\u0446\u0430","type":"17","img":"\/i\/labirint\/objects\/lesup.png","aspect":"3"},{"id":"9","name":"\u041b\u043e\u0432\u0443\u0448\u043a\u0430 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u043f\u043e\u0442\u0435\u0440\u0438 \u0436\u0438\u0437\u043d\u0435\u0439","type":"9","img":"\/i\/labirint\/objects\/attentionpoint_red1.gif","aspect":"7"},{"id":"12","name":"\u041b\u043e\u0432\u0443\u0448\u043a\u0430 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0439 \u043f\u043e\u0442\u0435\u0440\u0438 \u0436\u0438\u0437\u043d\u0435\u0439","type":"12","img":"\/i\/labirint\/objects\/attentionpoint_red1.gif","aspect":"8"},{"id":"22","name":"\u041c\u0430\u0441\u0442\u0435\u0440\u0441\u043a\u0430\u044f \u0417\u0430\u0431\u044b\u0442\u044b\u0445 \u041c\u0430\u0441\u0442\u0435\u0440\u043e\u0432","type":"43","img":"\/i\/labirint\/objects\/mastersk.png","aspect":"1"},{"id":"23","name":"\u041c\u0435\u0440\u0446\u0430\u044e\u0449\u0438\u0439 \u043a\u043b\u044e\u0447 \u21163","type":"44","img":"\/i\/labirint\/objects\/key3.gif","aspect":"1"},{"id":"7","name":"\u041c\u0435\u0441\u0442\u043e\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u041c\u0443\u0441\u043e\u0440\u0430","type":"7","img":"\/i\/labirint\/objects\/kucha.png","aspect":"1"},{"id":"28","name":"\u041f\u043e\u0442\u0435\u0440\u044f\u043d\u043d\u044b\u0439 \u0421\u0443\u043d\u0434\u0443\u043a","type":"94","img":"\/i\/labirint\/objects\/sun1.png","aspect":"1"},{"id":"26","name":"\u041f\u043e\u0442\u0435\u0440\u044f\u043d\u043d\u044b\u0439 \u0421\u0443\u043d\u0434\u0443\u043a","type":"95","img":"\/i\/labirint\/objects\/sund3.png","aspect":"1"},{"id":"30","name":"\u0420\u0435\u0448\u0435\u0442\u043a\u0430","type":"91","img":"\/i\/labirint\/objects\/rewet.gif","aspect":"2"},{"id":"1","name":"\u0420\u0435\u0448\u0435\u0442\u043a\u0430","type":"1","img":"\/i\/labirint\/objects\/rewet.gif","aspect":"2"},{"id":"2","name":"\u0421\u043a\u043b\u0430\u0434 \u041b\u0443\u043a\u0438","type":"2","img":"\/i\/labirint\/objects\/sclad.gif","aspect":"2"},{"id":"20","name":"\u0421\u0443\u043d\u0434\u0443\u043a","type":"16","img":"\/i\/labirint\/objects\/smag_collect1.png","aspect":"1"},{"id":"5","name":"\u0421\u0443\u043d\u0434\u0443\u043a","type":"5","img":"\/i\/labirint\/objects\/sun1.png","aspect":"1"},{"id":"29","name":"\u0421\u0443\u043d\u0434\u0443\u043a \u0421\u0442\u0440\u0430\u0436\u0430","type":"90","img":"\/i\/labirint\/objects\/chest04.png","aspect":"1"},{"id":"36","name":"\u0421\u0443\u043d\u0434\u0443\u0447\u043e\u043a \u0434\u043b\u044f \u0434\u0440\u0443\u0433\u0430","type":"21","img":"\/i\/labirint\/objects\/","aspect":"1"},{"id":"25","name":"\u0422\u0435\u043b\u0435\u043f\u043e\u0440\u0442","type":"69","img":"\/i\/labirint\/objects\/teleport06.png","aspect":"3"},{"id":"19","name":"\u0422\u0435\u043b\u0435\u043f\u043e\u0440\u0442","type":"15","img":"\/i\/labirint\/objects\/teleport01.png","aspect":"3"},{"id":"18","name":"\u0422\u0435\u043b\u0435\u043f\u043e\u0440\u0442","type":"14","img":"\/i\/labirint\/objects\/teleport02.png","aspect":"3"},{"id":"3","name":"\u0422\u0435\u043b\u0435\u043f\u043e\u0440\u0442","type":"3","img":"\/i\/labirint\/objects\/lesdown.gif","aspect":"3"},{"id":"35","name":"\u0424\u043e\u043d\u0442\u0430\u043d \u0417\u0430\u0431\u044b\u0442\u044b\u0445 \u041c\u0430\u0441\u0442\u0435\u0440\u043e\u0432","type":"20","img":"\/i\/labirint\/objects\/","aspect":"1"},{"id":"21","name":"\u0424\u043e\u043d\u0442\u0430\u043d \u0417\u0430\u0447\u0430\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0413\u043e\u0440","type":"42","img":"\/i\/labirint\/objects\/42.png","aspect":"1"},{"id":"33","name":"\u0424\u043e\u043d\u0442\u0430\u043d \u0418\u0441\u043a\u0430\u0436\u0451\u043d\u043d\u043e\u0439 \u041f\u0440\u0438\u0440\u043e\u0434\u044b","type":"18","img":"\/i\/labirint\/objects\/","aspect":"1"},{"id":"34","name":"\u0424\u043e\u043d\u0442\u0430\u043d \u041b\u0451\u0433\u043a\u043e\u0439 \u0416\u0438\u0437\u043d\u0438","type":"19","img":"\/i\/labirint\/objects\/","aspect":"1"},{"id":"17","name":"\u0424\u043e\u043d\u0442\u0430\u043d \u041e\u0442\u0440\u0438\u0446\u0430\u043d\u0438\u044f","type":"41","img":"\/i\/labirint\/objects\/fontan2.png","aspect":"1"},{"id":"16","name":"\u0424\u043e\u043d\u0442\u0430\u043d1","type":"40","img":"\/i\/labirint\/objects\/fontan1.png","aspect":"1"}];

  artifactsRouter.get('/', function(req, res) {
    res.send(items);
  });

  artifactsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  artifactsRouter.get('/:id', function(req, res) {
    res.send(items.find(function(item){
        return item.id === req.params.id;
      }));
  });

  artifactsRouter.put('/:id', function(req, res) {
    res.send({
      'artifacts': items.find(function(item){
        return item.id === req.params.id;
      })
    });
  });

  artifactsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/artifacts', artifactsRouter);
};
