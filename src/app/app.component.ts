import { Component } from '@angular/core';
import { DscribeCommandDisplayPredicate, DscribeService, DscribeCommandCallbackInput, ListComponent, DscribeFeatureArea } from 'dscribe';
import { AuthService } from './auth/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public authService: AuthService, private dscribeService: DscribeService) {
		this.setupDscribe();
		this.dscribeService.setServerRoot(environment.apiServerRoot);
  }

  private setupDscribe() {
		const clbck = (x: DscribeCommandCallbackInput<ListComponent>) => x.sourceComponent.refreshData();
		const dispPred = (x: DscribeCommandDisplayPredicate<ListComponent>) => x.component.displayMode === 'grid';
		this.dscribeService.setCommands([{
			name: 'refresh',
			title: 'Refresh',
			iconName: 'refresh',
			featureAreas: DscribeFeatureArea.Filter,
			callback: clbck,
			displayPredicate: dispPred
		}]);
	}

}
