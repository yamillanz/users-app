import { Injectable, WritableSignal, signal } from '@angular/core';
// import { BehaviorSubject, Subject, tap } from 'rxjs';

export interface AppConfig {
  inputStyle: string;
  colorScheme: string;
  theme: string;
  ripple: boolean;
  menuMode: string;
  scale: number;
}

interface LayoutState {
  staticMenuDesktopInactive: boolean;
  overlayMenuActive: boolean;
  profileSidebarVisible: boolean;
  configSidebarVisible: boolean;
  staticMenuMobileActive: boolean;
  menuHoverActive: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  config: AppConfig = {
    ripple: false,
    inputStyle: 'outlined',
    menuMode: 'static',
    colorScheme: 'light',
    theme: 'lara-light-indigo',
    scale: 14,
  };

  state: LayoutState = {
    staticMenuDesktopInactive: false,
    overlayMenuActive: false,
    profileSidebarVisible: false,
    configSidebarVisible: false,
    staticMenuMobileActive: false,
    menuHoverActive: false,
  };

  //   private configUpdate = new Subject<AppConfig>();

  //   private overlayOpen = new Subject<any>();

  //   configUpdate$ = this.configUpdate.asObservable();

  //   overlayOpen$ = this.overlayOpen.asObservable();

  //   private menuHoverActive = new BehaviorSubject<boolean>(false);
  private menuHoverActiveSignal: WritableSignal<boolean> = signal(false);

  //   onMenuToggle() {
  //     if (this.isOverlay()) {
  //       this.state.overlayMenuActive = !this.state.overlayMenuActive;
  //       console.log('onMenuToggle', this.state.overlayMenuActive);
  //       if (this.state.overlayMenuActive) {
  //         this.overlayOpen.next(null);
  //       }
  //     }

  //     if (this.isDesktop()) {
  //       this.state.staticMenuDesktopInactive =
  //         !this.state.staticMenuDesktopInactive;
  //     } else {
  //       this.state.staticMenuMobileActive = !this.state.staticMenuMobileActive;

  //       if (this.state.staticMenuMobileActive) {
  //         this.overlayOpen.next(null);
  //       }
  //     }
  //   }

  //   onMenuHover() {
  //     this.menuHoverActive.next(!this.menuHoverActive.value);
  //   }
  //   showMenuHoverActive() {
  //     this.menuHoverActive.next(true);
  //   }
  //   get isMenuHoverActive() {
  //     return this.menuHoverActive.asObservable();
  //   }

  get ismenuHoverActiveSignal() {
    return this.menuHoverActiveSignal;
  }
  showMenu() {
    this.menuHoverActiveSignal.set(false);
    this.menuHoverActiveSignal.set(true);
  }

  showMenuProfile() {
    this.menuHoverActiveSignal.set(false);
  }

  //   showProfileSidebar() {
  //     this.state.profileSidebarVisible = !this.state.profileSidebarVisible;
  //     if (this.state.profileSidebarVisible) {
  //       this.overlayOpen.next(null);
  //     }
  //   }

  showConfigSidebar() {
    this.state.configSidebarVisible = true;
  }

  isOverlay() {
    return this.config.menuMode === 'overlay';
  }

  isDesktop() {
    return window.innerWidth > 991;
  }

  isMobile() {
    return !this.isDesktop();
  }

  //   onConfigUpdate() {
  //     this.configUpdate.next(this.config);
  //   }
}
