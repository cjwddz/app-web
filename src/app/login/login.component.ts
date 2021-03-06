
import {
  Component
} from '@angular/core';
import {config} from '../../config/config';
import {MeditorService} from '../services/meditor.service';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  forgetPwd = config.urls.forgetPwd;
  register = config.urls.register;
  account = '';
  password = '';
  constructor(private meditor: MeditorService, private auth: AuthenticationService) {
  }
  login() {
    this.auth.login({
      account: this.account,
      pwd: this.password,
    }).subscribe(null, (res) => {
      console.log(res);
      // todo 提示错误！！
    });
  }
}
