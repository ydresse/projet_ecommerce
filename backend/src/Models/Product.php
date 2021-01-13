<?php

use Doctrine\ORM\Mapping as ORM;

/**
 * Product
 *
 * @ORM\Table(name="product")
 * @ORM\Entity
 */
class Product
{
    /**
     * @var int
     *
     * @ORM\Column(name="idProduct", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idProduct;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=256, nullable=false)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="price", type="string", length=256, nullable=false)
     */
    private $price;

    /**
     * @var string|null
     *
     * @ORM\Column(name="description", type="string", length=256, nullable=true)
     */
    private $description;

    /**
     * @var string
     *
     * @ORM\Column(name="image", type="string", length=256, nullable=true)
     */
    private $image;

    /**
     * @var \DateTime|null
     * @ORM\Column(name="date_release", type="date")
     *
     */
    private $date_release;

    /**
     * @var int
     *
     * @ORM\Column(name="stock", type="integer", length=256, nullable=true)
     */
    private $stock;

    /**
     * @var string
     *
     * @ORM\Column(name="category", type="string", length=256, nullable=true)
     */
    private $category;

        /**
     * @var string
     *
     * @ORM\Column(name="character", type="string", length=256, nullable=true)
     */
    private $character;


    /**
     * Get idProduct.
     *
     * @return int
     */
    public function getIdProduct()
    {
        return $this->idProduct;
    }

    /**
     * Set name.
     *
     * @param string $name
     *
     * @return Product
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name.
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set price.
     *
     * @param int $price
     *
     * @return Product
     */
    public function setPrice($price)
    {
        $this->price = $price;

        return $this;
    }

    /**
     * Get price.
     *
     * @return int
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Set description.
     *
     * @param string|null $description
     *
     * @return Product
     */
    public function setDescription($description = null)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description.
     *
     * @return string|null
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set image.
     *
     * @param string|null $image
     *
     * @return Product
     */
    public function setImage($image = null)
    {
        $this->image = $image;

        return $this;
    }

    /**
     * Get image.
     *
     * @return string|null
     */
    public function getImage()
    {
        return $this->image;
    }

    
    /**
     * Set releaseDate.
     *
     * @param \DateTime $releaseDate
     *
     * @return Product
     */
    public function setReleaseDate($dateRelease)
    {
        $this->data_release = $date_release;

        return $this;
    }

    /**
     * Get releaseDate.
     *
     * @return \DateTime
     */
    public function getReleaseDate()
    {
        return $this->date_release;
    }


    /**
     * Set stock.
     *
     * @param int $stock
     *
     * @return Product
     */
    public function setStock($stock)
    {
        $this->stock = $stock;

        return $this;
    }

    /**
     * Get stock.
     *
     * @return int
     */
    public function getStock()
    {
        return $this->stock;
    }

    /**
     * Set category.
     *
     * @param string|null $category
     *
     * @return Product
     */
    public function setCategory($category = null)
    {
        $this->category = $category;

        return $this;
    }

    /**
     * Get category.
     *
     * @return string|null
     */
    public function getCategory()
    {
        return $this->category;
    }


    /**
     * Set character.
     *
     * @param string|null $character
     *
     * @return Product
     */
    public function setCharacter($character = null)
    {
        $this->character = $character;

        return $this;
    }

    /**
     * Get character.
     *
     * @return string|null
     */
    public function getCharacter()
    {
        return $this->character;
    }


}