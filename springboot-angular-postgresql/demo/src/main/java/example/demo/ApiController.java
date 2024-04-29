package example.demo;

import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/values")
public class ApiController {

    Logger logger = LoggerFactory.getLogger(ApiController.class);

    @Autowired
    private HttpServletRequest httpServletRequest;

    @GetMapping
    public ResponseEntity<?> get() {
        logger.info("{} {}", httpServletRequest.getMethod(), httpServletRequest.getRequestURI());

        Map<String, Object> map1 = new HashMap<>();
        map1.put("serial", "v1");

        Map<String, Object> map2 = new HashMap<>();
        map2.put("serial", "v2");

        List<Map<String, Object>> maps = List.of(map1, map2);

        return new ResponseEntity<>(maps, HttpStatus.OK);
    }

}
