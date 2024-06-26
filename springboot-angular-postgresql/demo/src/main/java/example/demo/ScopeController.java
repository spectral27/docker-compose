package example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/scopes")
public class ScopeController {

    @Autowired
    private ScopeRepository repository;

    @GetMapping
    public ResponseEntity<List<Scope>> get() {
        return new ResponseEntity<>(repository.findAll(), HttpStatus.OK);
    }

}
