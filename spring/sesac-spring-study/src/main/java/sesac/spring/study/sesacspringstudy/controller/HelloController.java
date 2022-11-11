package sesac.spring.study.sesacspringstudy.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {
    @GetMapping("hi")
    public String getHi(Model model){
        model.addAttribute("text", "hihihi");
        return "hi";
    }
    @GetMapping("Hello")
    public String getHi2(){
        return "hi";
    }
    @GetMapping("bye")
    public String bye(Model model){
        model.addAttribute("real","goodday to die");
        return "bye";
    }
}

