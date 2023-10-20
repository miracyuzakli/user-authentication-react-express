// controllers/sampleController.js

exports.getSampleData = (req, res) => {
    // API'den döndürmek istediğiniz veriyi burada oluşturun
    const data = {
      message: 'Merhaba, API!',
      timestamp: new Date()
    };
  
    res.json(data);
  };
  