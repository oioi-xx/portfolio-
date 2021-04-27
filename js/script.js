$(document).ready(function () {
    if ($('#fullpage').length > 0) {
        /* 풀페이지 */
        $('#fullpage').fullpage({
            afterLoad: function (origin, destination, direction) {
                //색인 사용
                if (destination.index > 0) {
                    $('.fixed_nav').css('visibility', 'visible');
                    $('.header nav').addClass('fixed');
                    //$('.logo img').attr('src','img/logo.png');
                } else {
                    $('.fixed_nav').css('visibility', 'hidden');
                    $('.header nav').removeClass('fixed');
                }
                if (destination.index == 2) {

                    var bar = new ProgressBar.Circle(container, {
                        color: '#FFEA82',
                        trailColor: '#eee',
                        trailWidth: 1,
                        duration: 1400,
                        easing: 'bounce',
                        strokeWidth: 6,
                        from: {
                            color: '#FFEA82',
                            a: 0
                        },
                        to: {
                            color: '#ED6A5A',
                            a: 1
                        },
                        // Set default step function for all animate calls
                        step: function (state, circle) {
                            circle.path.setAttribute('stroke', state.color);
                        }
                    });

                    bar.animate(1.0);

                }
                if (destination.index == 2) {

                    var bar = new ProgressBar.Circle(container1, {
                        color: '#FFEA82',
                        trailColor: '#eee',
                        trailWidth: 1,
                        duration: 1400,
                        easing: 'bounce',
                        strokeWidth: 6,
                        from: {
                            color: '#FFEA82',
                            a: 0
                        },
                        to: {
                            color: '#ED6A5A',
                            a: 1
                        },
                        // Set default step function for all animate calls
                        step: function (state, circle) {
                            circle.path.setAttribute('stroke', state.color);
                        }
                    });

                    bar.animate(1.0);

                }
                if (destination.index == 2) {

                    var bar = new ProgressBar.Circle(container2, {
                        color: '#FFEA82',
                        trailColor: '#eee',
                        trailWidth: 1,
                        duration: 1400,
                        easing: 'bounce',
                        strokeWidth: 6,
                        from: {
                            color: '#FFEA82',
                            a: 0
                        },
                        to: {
                            color: '#ED6A5A',
                            a: 1
                        },
                        // Set default step function for all animate calls
                        step: function (state, circle) {
                            circle.path.setAttribute('stroke', state.color);
                        }
                    });

                    bar.animate(1.0);

                }
                if (destination.index == 2) {

                    var bar = new ProgressBar.Circle(container3, {
                        color: '#FFEA82',
                        trailColor: '#eee',
                        trailWidth: 1,
                        duration: 1400,
                        easing: 'bounce',
                        strokeWidth: 6,
                        from: {
                            color: '#FFEA82',
                            a: 0
                        },
                        to: {
                            color: '#ED6A5A',
                            a: 1
                        },
                        // Set default step function for all animate calls
                        step: function (state, circle) {
                            circle.path.setAttribute('stroke', state.color);
                        }
                    });

                    bar.animate(1.0);

                }
                if (destination.index == 2) {

                    var bar = new ProgressBar.Circle(container4, {
                        color: '#FFEA82',
                        trailColor: '#eee',
                        trailWidth: 1,
                        duration: 1400,
                        easing: 'bounce',
                        strokeWidth: 6,
                        from: {
                            color: '#FFEA82',
                            a: 0
                        },
                        to: {
                            color: '#ED6A5A',
                            a: 1
                        },
                        // Set default step function for all animate calls
                        step: function (state, circle) {
                            circle.path.setAttribute('stroke', state.color);
                        }
                    });

                    bar.animate(1.0);

                }
                if (destination.index == 2) {

                    var bar = new ProgressBar.Circle(container5, {
                        color: '#FFEA82',
                        trailColor: '#eee',
                        trailWidth: 1,
                        duration: 1400,
                        easing: 'bounce',
                        strokeWidth: 6,
                        from: {
                            color: '#FFEA82',
                            a: 0
                        },
                        to: {
                            color: '#ED6A5A',
                            a: 1
                        },
                        // Set default step function for all animate calls
                        step: function (state, circle) {
                            circle.path.setAttribute('stroke', state.color);
                        }
                    });

                    bar.animate(1.0);

                }
                if (destination.index == 2) {

                    var bar = new ProgressBar.Circle(container6, {
                        color: '#FFEA82',
                        trailColor: '#eee',
                        trailWidth: 1,
                        duration: 1400,
                        easing: 'bounce',
                        strokeWidth: 6,
                        from: {
                            color: '#FFEA82',
                            a: 0
                        },
                        to: {
                            color: '#ED6A5A',
                            a: 1
                        },
                        // Set default step function for all animate calls
                        step: function (state, circle) {
                            circle.path.setAttribute('stroke', state.color);
                        }
                    });

                    bar.animate(1.0);

                }
                if (destination.index > 1 && destination.index < 3) {

                    var bar = new ProgressBar.Circle(container7, {
                        color: '#FFEA82',
                        trailColor: '#eee',
                        trailWidth: 1,
                        duration: 1400,
                        easing: 'bounce',
                        strokeWidth: 6,
                        from: {
                            color: '#FFEA82',
                            a: 0
                        },
                        to: {
                            color: '#ED6A5A',
                            a: 1
                        },
                        // Set default step function for all animate calls
                        step: function (state, circle) {
                            circle.path.setAttribute('stroke', state.color);
                        }
                    });

                    bar.animate(1.0);

                }
                if (destination.index == 2) {

                    var bar = new ProgressBar.Circle(container8, {
                        color: '#FFEA82',
                        trailColor: '#eee',
                        trailWidth: 1,
                        duration: 1400,
                        easing: 'bounce',
                        strokeWidth: 6,
                        from: {
                            color: '#FFEA82',
                            a: 0
                        },
                        to: {
                            color: '#ED6A5A',
                            a: 1
                        },
                        // Set default step function for all animate calls
                        step: function (state, circle) {
                            circle.path.setAttribute('stroke', state.color);
                        }
                    });

                    bar.animate(1.0);

                }

                if (destination.index == 1 || destination.index == 2) {
                    $('.fixed_nav').find('a').removeClass('active');
                    $('.fixed_nav').find('a').removeClass('active-black');
                    $('.fixed_nav').find('a').eq(destination.index).addClass('active-black');
                } else {
                    $('.fixed_nav').find('a').removeClass('active-black');
                    $('.fixed_nav').find('a').removeClass('active');
                    $('.fixed_nav').find('a').eq(destination.index).addClass('active');
                }
                if (destination.index == 6) {
                    $('.back_to_top').addClass('active');
                } else {
                    $('.back_to_top').removeClass('active');
                }


            }
        });
    }
});
