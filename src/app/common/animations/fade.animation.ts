import {
  trigger,
  animate,
  transition,
  style,
  query,
  group,
  state
} from '@angular/animations';


export const routeAnimation =
trigger('routeAnimations', [
  transition(
    '* => *',
    [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          opacity: '0'
        })
      ], { optional: true }),

      query(':enter', [
        animate('0.3s', style({
          opacity: '1',
        }))
      ], { optional: true }),
    ]
  ),
])
