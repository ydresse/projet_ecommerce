<?php

use Doctrine\ORM\Mapping as ORM;

/**
 * User
 *
 * @ORM\Table(name="User")
 * @ORM\Entity
 */
class User
{
    /**
     * @var int
     */
    private $idUser;

    /**
     * @var string
     * 
     * ORM\Column(name="firstname", type="string", length=256, nullable=true)
     */
    private $firstname;

    /**
     * @var string
     * 
     * ORM\Column(name="lastname", type="string", length=256, nullable=true)
     */
    private $lastname;
    
    /**
     * @var string
     * 
     * ORM\Column(name="email", type="string", length=256, nullable=true)
     */
    private $email;

    /**
     * @var string|null
     * 
     * ORM\Column(name="login", type="string", length=256, nullable=true)
     */
    private $login;

    /**
     * @var string|null
     * 
     * ORM\Column(name="password", type="string", length=256, nullable=true)
     */
    private $password;

    /**
     * @var string
     * 
     * ORM\Column(name="gender", type="string", length=256, nullable=true)
     */
    private $gender;

    /**
     * @var string
     * 
     * ORM\Column(name="address", type="string", length=256, nullable=true)
     */
    private $address;

    /**
     * @var string
     * 
     * ORM\Column(name="postal", type="string", length=256, nullable=true)
     */
    private $postal;

    /**
     * @var string
     * 
     * ORM\Column(name="city", type="string", length=256, nullable=true)
     */
    private $city;

    /**
     * @var string
     * 
     * ORM\Column(name="country", type="string", length=256, nullable=true)
     */
    private $country;

    /**
     * @var string
     * 
     * ORM\Column(name="phone", type="string", length=256, nullable=true)
     */
    private $phone;


    /**
     * Get idUser.
     *
     * @return int
     */
    public function getIdUser()
    {
        return $this->idUser;
    }

    /**
     * Set gender.
     *
     * @param string $gender
     *
     * @return User
     */
    public function setGender($gender)
    {
        $this->gender = $gender;

        return $this;
    }

    /**
     * Get gender.
     *
     * @return string
     */
    public function getGender()
    {
        return $this->gender;
    }

    /**
     * Set lastname.
     *
     * @param string $lastname
     *
     * @return User
     */
    public function setLastname($lastname)
    {
        $this->lastname = $lastname;

        return $this;
    }

    /**
     * Get lastname.
     *
     * @return string
     */
    public function getlastname()
    {
        return $this->lastname;
    }

    /**
     * Set firstname.
     *
     * @param string $firstname
     *
     * @return User
     */
    public function setFirstname($firstname)
    {
        $this->firstname = $firstname;

        return $this;
    }

    /**
     * Get firstname.
     *
     * @return string
     */
    public function getFirstname()
    {
        return $this->firstname;
    }

    /**
     * Set address.
     *
     * @param string $address
     *
     * @return User
     */
    public function setAddress($address)
    {
        $this->address = $address;

        return $this;
    }

    /**
     * Get address.
     *
     * @return string
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * Set postal.
     *
     * @param string $postal
     *
     * @return User
     */
    public function setPostal($postal)
    {
        $this->postal = $postal;

        return $this;
    }

    /**
     * Get postal.
     *
     * @return string
     */
    public function getPostal()
    {
        return $this->postal;
    }

    /**
     * Set city.
     *
     * @param string $city
     *
     * @return User
     */
    public function setCity($city)
    {
        $this->city = $city;

        return $this;
    }

    /**
     * Get city.
     *
     * @return string
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * Set country.
     *
     * @param string $country
     *
     * @return User
     */
    public function setCountry($country)
    {
        $this->country = $country;

        return $this;
    }

    /**
     * Get country.
     *
     * @return string
     */
    public function getCountry()
    {
        return $this->country;
    }

    /**
     * Set phone.
     *
     * @param string $phone
     *
     * @return User
     */
    public function setPhone($phone)
    {
        $this->phone = $phone;

        return $this;
    }

    /**
     * Get phone.
     *
     * @return string
     */
    public function getPhone()
    {
        return $this->phone;
    }

    /**
     * Set email.
     *
     * @param string $email
     *
     * @return User
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email.
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set login.
     *
     * @param string|null $login
     *
     * @return User
     */
    public function setLogin($login = null)
    {
        $this->login = $login;

        return $this;
    }

    /**
     * Get login.
     *
     * @return string|null
     */
    public function getLogin()
    {
        return $this->login;
    }

    /**
     * Set password.
     *
     * @param string|null $password
     *
     * @return User
     */
    public function setPassword($password = null)
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Get password.
     *
     * @return string|null
     */
    public function getPassword()
    {
        return $this->password;
    }
}