package com.cbt;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HomeController {
  
  private final CbtRepository cbtRepository;

  public HomeController(CbtRepository cbtRepository){
    this.cbtRepository = cbtRepository;
  }
  
  @GetMapping("/hello")
  public String hello(){
    return "hello";
  }

  @GetMapping("/index")
  public List<Cbt> index(){
    return this.cbtRepository.findAll();
  }

  public String 

}
