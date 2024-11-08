const getProducts = async (req, res) => {
  try {
      // Dynamically import node-fetch
      const fetch = (await import('node-fetch')).default;

      const response = await fetch('https://dummyjson.com/products/category/groceries');
      const data = await response.json();

      res.status(200).json({ data });
      
  } catch (error) {
      console.error("An error occurred: " + error);
      res.status(500).send("Internal Server Error");
  }
}


const searchProducts = async (req, res) => {
  try {
      // Dynamically import node-fetch
      const fetch = (await import('node-fetch')).default;
      const {searchThis} = req.body;
      console.log(searchThis);
      const response = await fetch(`https://dummyjson.com/products/search?q=${searchThis}`);
      const data = await response.json();

      res.status(200).json({ data });
      
  } catch (error) {
      console.error("An error occurred: " + error);
      res.status(500).send("Internal Server Error");
  }
}

module.exports = {getProducts, searchProducts};