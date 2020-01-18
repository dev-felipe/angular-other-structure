package com.angularotherstructure.project.controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.angularotherstructure.project.model.Pessoa;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/pessoas")
public class PessoasController {
	
	//Get all of the Registers on the database
    //user/
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public Boolean getAllList(){
        return true;
    }
    
    
  //Get a one register by id
    //Registers/get/1
    @RequestMapping(value = "/get/{id}", method = RequestMethod.GET)
    public Boolean getById(@PathVariable("id") int id) {
            return true;
    }
    
    
    //Add entities in database, receive from angular interface by POST request
    //user/add
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public String insertNewPeople(@RequestBody Pessoa pessoa) {
        return "Cheguei";
           
    }
    
    //Delete registers from database by id
    //user/delete/1
    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public Boolean deletePeople(@PathVariable("id") int id) {
        return true;
    }
    
  //Update registers into database by id, receive entity from angular interface and replace.
    //Registers/update/1
    @RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
    public Boolean changePeople(@PathVariable("id") int id, @RequestBody Pessoa pessoa, @RequestHeader String token) {
    	return true;
    } 
}
