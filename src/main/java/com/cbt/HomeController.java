package com.cbt;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HomeController {

    private final CbtRepository cbtRepository;

    public HomeController(CbtRepository cbtRepository) {
        this.cbtRepository = cbtRepository;
    }

    @GetMapping("/index")
    public List<Cbt> index() {
        return this.cbtRepository.findAll();
    }

    @PostMapping("/create")
    public void create(@RequestBody Cbt cbt) {
        this.cbtRepository.create(cbt);
    }

    @GetMapping("{id}")
    public Cbt findById(@PathVariable int id) {
        return this.cbtRepository.findById(id);
    }

    @PostMapping("/update")
    public void update(@RequestBody Cbt cbt) {
        this.cbtRepository.update(cbt);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable int id) {
        this.cbtRepository.delete(id);
    }
}
