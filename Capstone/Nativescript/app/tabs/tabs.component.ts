import {Component } from "@angular/core";
import { Page } from "ui/page"; // to hide action bar

class news{
  constructor(public id : string, public name: string){}
}

@Component({
  selector: "tabs",
  template: `<TabView>
  <StackLayout *tabItem="{title: 'News'}" >
          <!-- <Page xmlns:lv="nativescript-pro-ui/listview">
      
              <lv:RadListView id="listview" class="list-group"> 
                      <lv:RadListView.listViewLayout>
                          <lv:ListViewLinearLayout scrollDirection="Vertical"/>
                      </lv:RadListView.listViewLayout>
                      <lv:RadListView.itemTemplate  [item] = 'info'> -->
                          <listview [item]= "info">
                              <ng-template let-item="item">
                          <StackLayout class="list-group-item">
                              <Label [text]="item.name " class="list-group-item-heading" ></Label>
                              <Label [text]=" item.id" textWrap="true" class="list-group-item-text" ></Label>
                          </StackLayout>
                      </ng-template>
                      </listview>
                      <!-- </lv:RadListView.itemTemplate>
                  </lv:RadListView>
              
          </Page> -->
  </StackLayout>
  <StackLayout *tabItem="{title: 'Info'}">        
  </StackLayout>
  <StackLayout *tabItem="{title: 'Providers'}">
      <Label text="Third ta"></Label>
  </StackLayout>
</TabView>`
})
export class tabsComponent {
  info: news[];
  constructor(){
    this.info= [
      {
        id: 'Random',
        name: 'Nuts'
      }
    ]
  }
}