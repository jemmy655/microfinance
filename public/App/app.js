/**
 * Instantiating the microfinanceApp module
 * Created by leo on 11/10/15.
 */

(function() {
    'use strict';

    angular
        .module('microfinanceApp', ['ngRoute','ngCookies','datatables'])
        .config(applicationConfiguration);
    applicationConfiguration.$inject = ['$routeProvider'];
    function applicationConfiguration ($routeProvider) {


        // Now set up the whens
        $routeProvider
            .when('/home', {
                templateUrl: "public/App/partials/dashboard.html"
            })

            .when('/dashboard', {
                templateUrl: "public/App/partials/dashboard.html"
            })

            .when('/applicants', {
                templateUrl: "public/App/partials/applicants.html",
                controller:"applicantController"
            })

            .when('/applicants/add', {
                templateUrl: "public/App/partials/applicants/add.html",
                controller:"applicantController"
            })

            .when('/applicants/manage', {
                templateUrl: "public/App/partials/applicants/index.html",
                controller:"applicantController"
            })

            .when('/applicant/:id', {
                templateUrl: "public/App/partials/applicants/view.html",
                controller:"applicantController"
            })
            .when('/applicant/:id/application', {
                templateUrl: "public/App/partials/applicants/applications.html",
                controller:"applicantController"
            })

            .when('/accounts', {

                templateUrl: "public/App/partials/applicants.html"
            }).when('/accounts/balance_sheet', {
                templateUrl: "public/App/partials/add_applicants.html"
            })
            .when('/settings/loans', {
                templateUrl: "public/App/partials/settings/loans/index.html",
                controller:"loanController"
            })
            .when('/settings/loans/add', {
                templateUrl: "public/App/partials/settings/loans/add.html",
                controller:"loanController"
            })
            .when('/settings/loans/:id/edit', {
                templateUrl: "public/App/partials/settings/loans/edit.html",
                controller:"loanController"
            })
            .when('/settings/loans/:id/applications', {
                templateUrl: "public/App/partials/settings/loans/applications.html",
                controller:"loanController"
            })
            .when('/settings/expenses', {
                templateUrl: "public/App/partials/settings/expenses/index.html",
                controller:"expensesController"
            })
            .when('/settings/liabilities', {
                templateUrl: "public/App/partials/settings/liabilities/index.html",
                controller:"liabilityController"
            })
            .when('/settings/assets', {
                templateUrl: "public/App/partials/settings/assets/index.html",
                controller:"assetController"
            })
            .when('/settings/applications', {
                templateUrl: "public/App/partials/settings/applications/index.html",
                controller:"applicationController"
            }).when('/settings/applications/:id/more', {
                templateUrl: "public/App/partials/settings/applications/more.html",
                controller:"applicationController"
            }).when('/settings/applications/:id/:applicant_id/grant', {
                templateUrl: "public/App/partials/settings/applications/grant.html",
                controller:"applicationController"
            })
            //.when('/settings/applications/:id/decline', {
            //    templateUrl: "public/App/partials/settings/applications/index.html",
            //    controller:"applicationController"
            //})
            .when('/users/add', {
                 templateUrl: "public/App/partials/add_manage.html"
            }).when('/users/manage', {
               templateUrl: "public/App/partials/add_manage.html"
            })
            .otherwise("/dashboard");
    }
})();
