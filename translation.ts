// This file has been generated from packages/webpack/lang-plugin/source/typeGeneration/generateTypes.ts by running `yarn web:start`.
// Do not edit manually, changes will be lost.
/* eslint @mestro/typescript/sort-interface-alphabetically: "off", @typescript-eslint/ban-types: "off", @typescript-eslint/member-ordering: "off" */

export interface Translations {
    access: {
        description: string;
    };
    accessCard: {
        button: string;
        description: string;
        heading: string;
        shortDescription: string;
    };
    accessForm: {
        createAccount: string;
        next: string;
        subheading: string;
    };
    accountSetup: {
        otherAccountMethods: string;
    };
    activeSpan: {
        active: string;
        activePeriods: string;
        cancel: string;
        editRelation: string;
        endDate: string;
        parentContain: string;
        save: string;
        startDate: string;
        unlimited: string;
    };
    agreement: {
        pricePart: string;
        spec: string;
        sum: string;
        total: string;
    };
    agreementPart: {
        object: string;
        objects: string;
    };
    agreementsReport: {
        agreementsModalDates: {
            applyFromDate: string;
            applyToDate: string;
        };
        agreementsModalDescription: {
            followingCanBeAppliedPlural: {
                agreements: {
                    meters: string;
                    properties: string;
                };
                meters: string;
                properties: string;
            };
            followingCanBeAppliedSingular: {
                agreements: {
                    meters: string;
                    properties: string;
                };
                meters: string;
                properties: string;
            };
            selectedAgreementHasType: string;
            selectedMeterIsOfTypePlural: string;
            selectedMeterIsOfTypeSingular: string;
        };
        agreementsModalFooter: {
            cancel: string;
            disclaimerSubTitle: string;
            disclaimerTitle: string;
            save: string;
        };
        agreementsModalHeader: {
            applyAgreementsToMeter: string;
            applyAgreementsToProperty: string;
        };
        agreementsModalRelation: {
            applyFromDateSubTitle: string;
            applyFromDateTitle: string;
            replaceExistingSubTitle: string;
            replaceExistingTitle: string;
        };
        agreementsTable: {
            check: string;
            checkAll: string;
            headers: {
                appliedTo: string;
                contractType: string;
            };
        };
        agreementsTableActions: {
            clone: string;
            confirmAgreementRemoval: string;
            delete: string;
            edit: string;
        };
        agreementsTippy: {
            title: string;
        };
        applyAgreementButton: {
            label: string;
            noAgreements: string;
            noMeters: string;
        };
        applyAgreementsButton: {
            label: string;
        };
        attachedMeters: {
            attachMeters: string;
            meters: string;
            noMetersYet: string;
        };
        createAgreementButton: {
            label: string;
            priceModels: {
                COLDWATER: string;
                COOLING: string;
                ELECTRICITY_DISTRIBUTION: string;
                ELECTRICITY_MARKET: string;
                GAS_DISTRIBUTION: string;
                GAS_MARKET: string;
                HEATING: string;
                HOTWATER: string;
                OIL: string;
                PELLETS: string;
                WASTE: string;
            };
        };
        deleteAgreementsButton: {
            label: string;
        };
        kindFilter: {
            filter: string;
            options: {
                all: string;
            };
        };
        metersTable: {
            check: string;
            checkAll: string;
            headers: {
                activeAgreements: string;
            };
        };
        propertiesTable: {
            check: string;
            checkAll: string;
            headers: {
                activeAgreements: string;
            };
        };
        report: {
            tabs: {
                agreementsSubTitle: string;
                agreementsTitle: string;
                metersSubTitle: string;
                metersTitle: string;
                propertiesSubTitle: string;
                propertiesTitle: string;
            };
        };
        supplierFilter: {
            filter: string;
            options: {
                all: string;
                customer: string;
                mestro: string;
            };
        };
    };
    alarmDetails: {
        alarmCount: string;
        threshold: {
            average_power: {
                ENERGY: string;
                VOLUME: string;
            };
            consumption: {
                ENERGY: string;
                VOLUME: string;
            };
        };
    };
    alarmGraph: {
        threshold: {
            average_power: {
                name: {
                    ENERGY: string;
                    VOLUME: string;
                };
            };
            consumption: {
                name: {
                    ENERGY: string;
                    VOLUME: string;
                };
            };
        };
    };
    alarmsList: {
        noAlarms: string;
    };
    alarmsListElementMore: {
        alarmType: string;
        first: string;
        latest: string;
        meter: string;
        threshold: {
            day: string;
            hour: string;
            month: string;
        };
    };
    alarmsMinimize: {
        collapseWidget: string;
        expandWidget: string;
    };
    alarmStatistics: {
        avgLabel: string;
        dataPointsLabel: string;
        maxLabel: string;
        medianLabel: string;
    };
    alarmsWidget: {
        header: string;
        helpHtml: string;
    };
    alarmTypeDropdown: {
        threshold: {
            ENERGY: {
                average_power: {
                    day: string;
                    hour: string;
                    menuHeader: string;
                    month: string;
                };
                consumption: {
                    day: string;
                    hour: string;
                    menuHeader: string;
                    month: string;
                };
            };
            VOLUME: {
                average_power: {
                    day: string;
                    hour: string;
                    menuHeader: string;
                    month: string;
                };
                consumption: {
                    day: string;
                    hour: string;
                    menuHeader: string;
                    month: string;
                };
            };
        };
    };
    archiveButton: {
        archive: string;
    };
    archiveModal: {
        archive: {
            heading: string;
            subheading: string;
        };
        unarchive: {
            heading: string;
            subheading: string;
        };
    };
    asanaGraph: {
        area: {
            subtitle: string;
            title: string;
        };
        column: {
            averageTime: string;
            axis: string;
            days: string;
            hours: string;
            longestTime: string;
            medianTime: string;
            seconds: string;
            shortestTime: string;
            subtitle: string;
            tasks: string;
            title: string;
        };
    };
    asanaGraphButtons: {
        area: string;
        column: string;
    };
    bbr: {
        buttons: {
            outcome: string;
            prognosis: string;
        };
        content: {
            prognosis: string;
        };
        graph: {
            year: string;
        };
        header: {
            headquarters: string;
        };
        table: {
            consColumn: {
                total: string;
            };
            goals: {
                prognosis: string;
                target: string;
            };
            headerRow: {
                actual: string;
                prognosis: string;
                trend: string;
            };
        };
        tabs: {
            common: string;
            garage: string;
            property: string;
            restaurant: string;
            tenant: string;
        };
    };
    buttonGroup: {
        back: string;
    };
    cancelButton: {
        cancel: string;
    };
    changeListNoChanges: {
        noChanges: string;
    };
    changeLog: {
        aggregate: string;
        header: string;
    };
    changeLogItem: {
        changedBy: string;
        newValue: string;
        node: string;
        oldValue: string;
        time: string;
    };
    changePasswordForm: {
        resetPassword: string;
    };
    changeReading: {
        buttonCancel: string;
        buttonDelete: string;
        buttonSave: string;
        cons: {
            change: string;
            delete: string;
        };
        ms: {
            change: string;
            delete: string;
        };
        newValue: string;
        value: string;
    };
    climateModelSection: {
        cooling: string;
        heating: string;
    };
    commentBox: {
        writeThreadReply: string;
    };
    commentForm: {
        adminOnly: string;
        newThreadPlaceHolder: string;
        postCommentFailed: string;
        submitButton: string;
    };
    commentHeader: {
        cancel: string;
        confirmDelete: string;
        delete: string;
        deleteFailed: string;
    };
    comments: {
        header: string;
        helpHtml: string;
        noComments: string;
    };
    common: {
        dates: {
            archived: string;
            everafter: string;
            eversince: string;
            months: string[];
            shortMonths: string[];
            unlimited: string;
            weekdays: string[];
        };
        general: {
            ddAdjusted: string;
            reset: string;
        };
        nodeNames: {
            favorites: string;
            virtualRoot: string;
        };
        numbers: {
            decimalPoint: string;
            thousandsSep: string;
        };
        quantity_units: {
            AMOUNT: {
                none: string;
            };
            DISTANCE: {
                km: string;
            };
            DISTANCE_PKM: {
                km: string;
            };
            DURATION: {
                h: string;
            };
            ENERGY: {
                GJ: string;
                MWh: string;
                kWh: string;
            };
            VOLUME: {
                litres: string;
                m3: string;
            };
            WEIGHT: {
                kg: string;
            };
        };
        references: {
            BASE_YEAR: string;
            NORMAL_YEAR: string;
            budget: string;
            no_reference: string;
            percentage_goal: string;
            previous_year: string;
        };
        resolutions: {
            'res-day': string;
            'res-hour': string;
            'res-month': string;
            resolution: string;
        };
        units_plural: {
            air_temperature: string;
            amount: string;
            area: string;
            cost_dkk: string;
            cost_dkk_real_total: string;
            cost_eur: string;
            cost_eur_real_total: string;
            cost_nok: string;
            cost_nok_real_total: string;
            cost_pln: string;
            cost_pln_real_total: string;
            cost_sek: string;
            cost_sek_real_total: string;
            data_quality: string;
            degrees: string;
            delta_temperature: string;
            distance: string;
            distance_pkm: string;
            energy: string;
            env_co2: string;
            environmental_guests: string;
            flow: string;
            forward_temperature: string;
            guestnights: string;
            keyvalue: string;
            percent: string;
            power: string;
            return_temperature: string;
            servings: string;
            usage: string;
            visitors: string;
            volume: string;
            weight: string;
        };
        usageArea: {
            building: string;
            tenant: string;
        };
    };
    compareTable: {
        diff: string;
        specification: string;
        sum: string;
    };
    comparisonGraph: {
        coverage: string;
        degreeDaySource: string;
        dividedBy: string;
        meterStandTitle: string;
        normalYearChange: string;
        objectCount: string;
        previousYear: string;
        total: string;
    };
    completionIndicator: {
        '0': string;
        '1': string;
        '2': string;
        '3': string;
    };
    components: {
        nav: {
            rootTabs: {
                tabAll: string;
                tabFavorites: string;
            };
        };
    };
    confirmButton: {
        continue: string;
    };
    confirmTextButton: {
        cancel: string;
    };
    consAnalysisLegendItem: {
        invertAxis: string;
    };
    consAnalysisReport: {
        compare: string;
    };
    consTable: {
        period: string;
        sum: string;
    };
    consumptionKpi: {
        footNote: string;
        goToConsReportButton: string;
        header: string;
        helpHtml: string;
        noData: string;
        period: string;
    };
    contactSalesCard: {
        button: string;
        heading: string;
    };
    contactSalesConfirmation: {
        close: string;
        confirmation: string;
        talk: string;
        thanks: string;
    };
    contactSalesForm: {
        button: string;
        subheading: string;
    };
    contractActions: {
        archive: string;
        clone: string;
        confirmContractRemoval: string;
        edit: string;
        unparsable: string;
    };
    costAnalysis: {
        costPerkWh: string;
        headers: {
            name: {
                meters: string;
                premises: string;
            };
            usage: string;
        };
        info: string;
        title: {
            count: string;
            group: string;
        };
    };
    costRankingBarTooltip: {
        coverage: string;
    };
    costRankingExport: {
        coverage: string;
        placeholder: string;
    };
    costTable: {
        heading: string;
    };
    createFavoriteModal: {
        heading: string;
        label: string;
        subheading: string;
    };
    crud: {
        cancel: string;
        confirm: string;
        date: string;
        defaults: {
            Access: string;
            AccessTo: string;
            BuildingType: string;
            ContractType: string;
            DefaultDataType: string;
            DefaultUOM: string;
            Distributor: string;
            EmissionScopeTag: string;
            EnergyUsage: string;
            Fuel: string;
            FuseSize: string;
            Kind: string;
            MatrixKey: string;
            MatrixType: string;
            PickArea: string;
            PriceModel: string;
            PricePartType: string;
            Quantity: string;
            ReadingChoice: string;
            ReadingSystem: string;
            RecyclingCompany: string;
            Role: string;
            Tax: string;
            TradingCompany: string;
            TransportationTrips: string;
            Type: string;
            VehicleType: string;
        };
        header: string;
        multiCrudHeading: string;
        placeholders: {
            GatewayID: string;
        };
        removeObject: string;
        saving: string;
    };
    crudButtons: {
        abortAlarm: string;
        removeAlarm: string;
        saveAlarm: string;
        saveFailed: string;
        saving: string;
    };
    crudInfo: {
        infoMain: string;
        infoSec: string;
    };
    customerOverview: {
        header: string;
    };
    dataLoader: {
        loading: string;
    };
    dataQuality: {
        future: string;
        title: string;
    };
    dateFilterFormula: {
        additionalPeriod: string;
        additionalTime: string;
        all_days: string;
        complex: string;
        complexHelpHtml: string[];
        days: string;
        exclude: string;
        excludeHelpHtml: string[];
        period: string;
        time: string;
        weekdays: string;
        weekends: string;
    };
    datePicker: {
        cancel: string;
        chosenPeriod: string;
        done: string;
        last12months: string;
        period: string;
    };
    defaultHeader: {
        addToFavoritesTitle: string;
        degreeDaySummary: string;
        noClimateStation: string;
    };
    detailsButton: {
        details: string;
    };
    diffTableAverageRow: {
        averageLabel: string;
    };
    diffTableHeaderRow: {
        dataQuality: string;
        month: string;
        sheetName: string;
    };
    diffTableSumRow: {
        sumLabel: string;
    };
    distribution: {
        goToConsReportButton: string;
        header: string;
        helpHtml: string;
        noData: string;
        period: string;
        pieChartCaption: string;
    };
    distributionWeekly: {
        chartWrapper: {
            '1111100': string;
            '0000011': string;
            captionDay: string;
            captionWeek: string;
        };
        goToConsReportButton: string;
        header: string;
        helpHtml: string;
        noData: string;
        period: string;
    };
    edit: {
        header: string;
        noAlarms: string;
    };
    editInput: {
        helpSuggestedValue: string;
    };
    editModal: {
        heading: string;
    };
    editPanel: {
        noValuesExceeding: string;
        threshold: {
            average_power: {
                header: string;
            };
            consumption: {
                header: string;
            };
        };
        valuesExceeding: string;
    };
    emailField: {
        usernameLabel: string;
        usernameLabelSecondary: string;
    };
    energySignature: {
        errors: {
            analysis_fail: string;
            error: string;
            lacking_data: string;
            no_climate: string;
            no_data_cooling: string;
            no_data_heating: string;
            wrong_node_type_cooling: string;
            wrong_node_type_heating: string;
        };
        titles: {
            areaChart_help: string;
        };
    };
    energySignatureSection: {
        analysis: string;
        cooling: string;
        heating: string;
    };
    energyUsageTag: {
        usageArea: string;
    };
    epcReport: {
        unsupportedNode: string;
    };
    epcWidgets: {
        buildings: string;
        excludedSubtitle: string;
        excludedTitle: string;
        explainer: {
            distribution: string;
            excludedPremises: string;
            ranking: string;
        };
        missingData: string;
        noMissingPremises: string;
        pieChartCaption: string;
        title: {
            distribution: string;
            excludedPremises: string;
            ranking: string;
        };
        unsupportedNode: string;
    };
    error: {
        appNotFound: string;
        contactSupport: string;
        portalUrl: string;
    };
    errorPanel: {
        contactSupportHtml: string;
        defaultMessage: string;
        downloadReport: string;
        reloadPage: string;
    };
    esignAreaSection: {
        cooling: string;
        heating: string;
    };
    esignContent: {
        cooling: string;
        heating: string;
        mean_temp: string;
    };
    esignHeader: {
        baseLoad: string;
        baseLoad_help_cooling: string;
        baseLoad_help_heating: string;
        capacityYear: string;
        capacityYearArea: string;
        coefficient: string;
        coefficient_help_cooling: string;
        coefficient_help_heating: string;
        dd_threshold: string;
        energyYear: string;
        overshoot: string;
        overshoot_description: string;
        overshoot_help_cooling: string;
        overshoot_help_heating: string;
        overshoot_tot: string;
        threshold: string;
        threshold_help_cooling: string;
        threshold_help_heating: string;
        total: string;
    };
    esignScatterInfoBox: {
        bp_area: string;
        bp_title: string;
        bp_type: string;
        bp_year: string;
        climate_title: string;
        loc_name: string;
        loc_src: string;
        missing_area: string;
    };
    esignScatterSection: {
        analysis: string;
        cooling: string;
        heating: string;
    };
    expandButton: {
        showLess: string;
        showMore: string;
    };
    favoriteModal: {
        actions: {
            add: string;
            move: string;
            remove: string;
        };
        createFavorite: string;
        heading: string;
        subheading: string;
    };
    forgotForm: {
        resetAccount: string;
        resetAccountExtra: string;
        resetLabel: string;
    };
    forgotPassword: {
        label: string;
    };
    fullNameField: {
        fullNameLabel: string;
        fullNameLabelSecondary: string;
    };
    goalsSelect: {
        goals: string;
        newPercentageGoal: string;
    };
    googleAuth: {
        signIn: string;
        signUp: string;
    };
    googleMapEmbed: {
        attribution: string;
        title: string;
    };
    graphs: {
        all: string;
        months_1: string;
        months_3: string;
        months_6: string;
        months_12: string;
        weeks_1: string;
        weeks_2: string;
        weeks_3: string;
        weeks_4: string;
        ytd: string;
    };
    graphTypeButtons: {
        column: string;
        line: string;
        table: string;
    };
    gresbBuilding: {
        assetLabel: string;
        propertyLabel: string;
    };
    gresbCompact: {
        bpIncomplete: string;
        bpReady: string;
    };
    gresbDetailListItem: {
        missingBP: string;
        missingBPTitle: string;
    };
    gresbNone: {
        noGresbBp: string;
    };
    groupAddModal: {
        add: string;
        createGroup: string;
        heading: string;
        subheading: string;
    };
    groupCreateModal: {
        heading: string;
        label: string;
        subheading: string;
    };
    groupMoveModal: {
        heading: string;
        move: string;
        subheading: string;
    };
    groupRemoveModal: {
        heading: string;
        remove: string;
        subheading: string;
    };
    hasLogin: {
        additionalInfoMandatory: string;
        hasLoginMandatory: string;
        nonMandatory: string;
    };
    header: {
        parentNode: string;
        tippys: {
            ATemp: string;
            BOA: string;
            BOALOA: string;
            BRA: string;
            BTA: string;
            BYA: string;
            City: string;
            Country: string;
            DefaultDataType: string;
            InstallationID: string;
            LOA: string;
            Name: string;
            OrgNumber: string;
            OwningCompany: string;
            ParentNode: string;
            Password: string;
            PostalCode: string;
            PropertyDesignation: string;
            URL: string;
            Username: string;
        };
    };
    holdingsOverview: {
        tabSubTitle: string;
        unsupportedAction: string;
    };
    holdingsOverviewButtonRow: {
        cancel: string;
        download: string;
        edit: string;
        info: string;
        setup: string;
        upload: string;
    };
    home: {
        apps: {
            benchmark: {
                description: string;
                name: string;
            };
            engage: {
                description: string;
                name: string;
            };
            input: {
                description: string;
                name: string;
            };
            portal: {
                description: string;
                name: string;
            };
            something: {
                description: string;
                name: string;
            };
        };
        general: {
            readMore: string;
            title: string;
            titleAppTips: string;
            titleOwnedApps: string;
        };
    };
    infoField: {
        cancel: string;
        continue: string;
        save: string;
    };
    inputfield: {
        emailError: string;
        missingCharacters: string;
        missingLowercase: string;
        missingNumber: string;
        missingUppercase: string;
        onlyLettersError: string;
        onlyNumbersError: string;
        passwordError: string;
        requiredError: string;
    };
    inputMeterRow: {
        buttonSave: string;
        cons: string;
        ms: string;
    };
    inputQuantityRow: {
        chooseQuantity: string;
    };
    inputSettings: {
        cancel: string;
        languageSetting: string;
        logout: string;
        ok: string;
        reload: string;
        title: string;
        version: string;
    };
    inputValidations: {
        errorDateTaken: string;
        errorNaN: string;
        invalidMeterChange: string;
    };
    inspectCoverageModal: {
        chartTitle: string;
        header: string;
    };
    inspectCoverageModalCopyButton: {
        copy: string;
        copySuccessful: string;
        meterID: string;
        missingEmail: string;
    };
    inspectCoverageModalGaps: {
        allMissing: string;
        missing: string;
        noMissing: string;
    };
    inspectCoverageModalLatestValue: {
        latestValue: string;
    };
    jsonEditor: {
        header: {
            active: string;
            setting: string;
        };
        heading: string;
    };
    kindBoxItem: {
        change: string;
        max: string;
        min: string;
        previousYear: string;
        quantity: {
            AMOUNT: string;
            COST_DKK_REAL_TOTAL: string;
            COST_EUR_REAL_TOTAL: string;
            COST_NOK_REAL_TOTAL: string;
            COST_PLN_REAL_TOTAL: string;
            COST_SEK_REAL_TOTAL: string;
            DISTANCE: string;
            DISTANCE_PKM: string;
            ENERGY: string;
            VOLUME: string;
            WEIGHT: string;
            COST_DKK: string;
            COST_EUR: string;
            COST_NOK: string;
            COST_PLN: string;
            COST_SEK: string;
            ENV_CO2: string;
        };
    };
    kindKpiItem: {
        currentPeriodCaption: string;
        refPeriodCaption: string;
    };
    kindUi: {
        kind: {
            ALL_KINDS: string;
            BIOGAS: string;
            BULKY_WASTE: string;
            CLIMATE: string;
            COLDWATER: string;
            COMBUSTIBLE_WASTE: string;
            COMPRESSED_AIR: string;
            COOLING: string;
            DEGREEDAYS: string;
            DIESEL: string;
            DURATION: string;
            ELECTRICAL_WASTE: string;
            ELECTRICITY: string;
            EMISSION: string;
            ENVIRONMENTAL_GUEST: string;
            ETHANOL: string;
            FILLERS: string;
            FOOD_WASTE: string;
            GAS: string;
            GASOLINE: string;
            GLASS_PACKAGING: string;
            GUESTNIGHT: string;
            HAZARDOUS_WASTE: string;
            HEATING: string;
            HOTWATER: string;
            JANITORIAL_COST: string;
            KPI: string;
            LANDFILL: string;
            MAINTENANCE_COST: string;
            METAL_PACKAGING: string;
            MIXED_WASTE: string;
            NON_HAZARDOUS_WASTE: string;
            NONE: string;
            NUMBER: string;
            OIL: string;
            OUTVOICE: string;
            PAPER_PACKAGING: string;
            PELLETS: string;
            PLASTIC_PACKAGING: string;
            RECYCLING_PAPER: string;
            RESIDUAL_WASTE: string;
            SCRAP_METAL: string;
            SERVING: string;
            SOFT_PLASTIC: string;
            TBD: string;
            TRANSPORTATION: string;
            TRANSPORTATION_SCOPE_1: string;
            TRANSPORTATION_SCOPE_3: string;
            VACANCY: string;
            VISITOR: string;
            WASTE: string;
            WASTE_COST: string;
            WATER: string;
            WOOD: string;
        };
        rawKind: {
            COLDWATER: string;
            COOLING: string;
            ELECTRICITY: string;
            GAS: string;
            HEATING: string;
            HOTWATER: string;
            OIL: string;
            PELLETS: string;
            WATER: string;
        };
    };
    loginForm: {
        additional: string;
        forgotPassword: string;
        loginButton: string;
        loginProgress: string;
        loginText: string;
        welcome: string;
    };
    markedMenu: {
        baseItem: {
            archive: string;
            delete: string;
            favorite: string;
            groupAdd: string;
            groupCreate: string;
            groupMove: string;
            groupRemove: string;
            move: string;
            unarchive: string;
        };
    };
    matrixCostEditor: {
        button: {
            addVersion: string;
        };
        header: {
            heading: string;
        };
        heading: string;
    };
    matrixCostEditorRow: {
        addRow: string;
    };
    matrixEditor: {
        header: {
            active: string;
            setting: string;
        };
        heading: string;
    };
    menuBar: {
        marked: string;
        unmark: string;
    };
    mestroClass: {
        additionalInformation: string;
        attributeLabel: string;
        classLabel: string;
        missingAttributes: string;
        noClass: string;
    };
    mestroClassInfo: {
        A: {
            available: {
                allAbove: string;
                environmentReports: string;
                settlementReport: string;
                sustainabilityReport: string;
            };
            checklist: {
                allAbove: string;
                hasBuildingMaterial: string;
                hasBuildings: string;
                hasCostAgreement: string;
                hasEnvironmentalAgreement: string;
                hasSubMetering: string;
                hasVUs: string;
                metersHaveEnergyUsageTag: string;
                metersHaveGreenTag: string;
            };
            header: string;
        };
        available: string;
        B: {
            available: {
                allAbove: string;
                benchmarking: string;
            };
            checklist: {
                allAbove: string;
                hasBuildingType: string;
                hasBuildingYear: string;
                hasDetailedAreas: string;
                hasHourlyData: string;
            };
            header: string;
        };
        C: {
            available: {
                areaNormalizedKPIs: string;
                degreeDays: string;
                outdoorTemperatures: string;
            };
            checklist: {
                hasArea: string;
                hasCity: string;
                hasCountry: string;
                hasMainMeters: string;
                hasMonthlyData: string;
                hasOrgNumber: string;
                hasOwningCompany: string;
                hasPropertyDesignation: string;
                hasStreet: string;
            };
            header: string;
        };
        checklist: string;
    };
    meterCrud: {
        choice: {
            ReadingChoice: {
                AUTOMATIC: string;
                MANUAL: string;
                REMOTE: string;
            };
        };
        CustomerNumber: string;
        GatewayID: string;
        HasLogin: string;
        MeterID: string;
        multiCrudHandler: {
            addAdditional: string;
            crud: string;
            overview: string;
        };
        OrgNumber: string;
        ReadingChoice: string;
    };
    meterData: {
        title: string;
    };
    meterDataComponent: {
        coolingP12: string;
        coolingR12: string;
        electricityP12: string;
        electricityR12: string;
        heatingP12: string;
        heatingR12: string;
        title: string;
    };
    meterDataEditField: {
        confirm: string;
    };
    meterDataHeader: {
        cons: {
            titlePrev: string;
        };
        ms: {
            titlePrev: string;
        };
    };
    meterDataInfo: {
        message: string;
    };
    meterDataMeta: {
        dataType: string;
    };
    meterDataMetaField: {
        availableData: string;
        availableDataBetween: string;
        noPrevValue: string;
    };
    meterDataNoHistory: {
        cons: {
            noPrevValue: string;
        };
        ms: {
            noPrevValue: string;
        };
    };
    meterDataNotification: {
        guestAccess: string;
        input: string;
        misconfigured: string;
        requiresAdmin: string;
        virtualMeter: string;
    };
    meterDataStatus: {
        ActivationDate: string;
        archiveMarked: string;
        Comment: string;
        contextMenu: {
            check: string;
            checkAll: string;
            setStatus: string;
        };
        Coverage: string;
        DataType: string;
        Distributor: string;
        export: {
            title: string;
        };
        exportTo: string;
        FirstValue: string;
        forceStatusMarked: string;
        HasAttachedRG: string;
        help: {
            editMeterAttributes: string;
            editMeterData: string;
            inspectCoverage: string;
        };
        helpHtml: string[];
        Id: string;
        LatestValue: string;
        Level: string;
        meterData: string;
        meterLevels: {
            '5': string;
            '6': string;
            '7': string;
            '10': string;
            allMeters: string;
            null: string;
        };
        Name: string;
        NodeId: string;
        numberOfMeters: string;
        Premises: string;
        Resolution: string;
        resolutions: {
            '': string;
            day: string;
            hour: string;
            inconclusive: string;
            minute: string;
            month: string;
            null: string;
            undetermined: string;
            unknown: string;
        };
        Source: string;
        Status: string;
        Type: string;
        valueTypes: {
            '': string;
            cons: string;
            inconclusive: string;
            mom: string;
            ms: string;
            null: string;
        };
    };
    meterDataStatusTable: {
        headers: {
            usageArea: string;
        };
    };
    meterDataUnitField: {
        unit: string;
    };
    meterDataUpload: {
        date: string;
        download: string;
        downloadHelp: string;
        downloadMsg: string;
        fileName: string;
        sheetName: string;
        upload: string;
        uploadHelp: string;
        uploadMsg: string;
    };
    meterDataUploadError: {
        filteredDates: string;
        filteredDatesAdditional: string;
    };
    meterDataValueField: {
        save: string;
    };
    meterDetail: {
        noData: string;
    };
    meterHandler: {
        VirtualMeterFormula: string;
        VirtualUnit: string;
    };
    meterItem: {
        fileName: string;
        noMeters: string;
    };
    meterRow: {
        addition: string;
        fractionOfMeter: string;
        subtraction: string;
    };
    meterStatusComponent: {
        darkYellow: string;
        green: string;
        lightYellow: string;
        openReport: string;
        orange: string;
        red: string;
        title: string;
    };
    microsoftAzureActiveDirectory: {
        signIn: string;
        signUp: string;
    };
    miscellaneousComponent: {
        loginsLast30Days: string;
        loginsPrev30Days: string;
        mandatoryAttributes: string;
        statistics: string;
        title: string;
    };
    miscellaneousComponentStatusRow: {
        latest_premises: string;
        latest_reports: string;
        latest_users: string;
        previous_premises: string;
        previous_reports: string;
        previous_users: string;
    };
    missingPriceParts: {
        noPricePartsFound: string;
    };
    modal: {
        footer: {
            cancel: string;
            create: string;
            edit: string;
        };
    };
    modeToggle: {
        patrolling: string;
    };
    momentaryAnalysis: {
        info: string;
        no_quantity: string;
    };
    momentaryAnalysisChart: {
        return: string;
    };
    moveModal: {
        heading: string;
        move: string;
    };
    multiCrudMultistageActions: {
        back: string;
        multiStageAddHint: string;
    };
    nav: {
        copiedNodeId: string;
    };
    navMenu: {
        crud: string;
        marked: string;
    };
    newReading: {
        cons: {
            titleNew: string;
            titleSaveButton: string;
        };
        ms: {
            consForPeriod: string;
            titleNew: string;
            titleSaveButton: string;
        };
        titleChoosePeriod: string;
        titleCurrentPeriod: string;
    };
    nodeGroup: {
        inactive: string;
        save: string;
        startSort: string;
    };
    nodeInfo: {
        multipleNodesTitle: string;
    };
    nodeInfoWidget: {
        collapseRole: string;
        editableByAdmin: string;
        editField: {
            cancel: string;
            save: string;
        };
        expandRole: string;
        fields: {
            tooltip: {
                gresbAsset: string;
            };
        };
        info: string;
    };
    nodeMention: {
        navigate: string;
    };
    nodeStatusComponent: {
        active: string;
        automatic: string;
        input: string;
        objects: string;
        robot: string;
    };
    nodeUi: {
        attributeTag: {
            GRESB: string;
            GRESBOptional: string;
        };
        bool: {
            false: string;
            true: string;
        };
        choice: {
            Building: {
                BuildingType: {
                    DAT_1: string;
                    HOT_1: string;
                    IND_1: string;
                    IND_2: string;
                    IND_3: string;
                    MED_1: string;
                    MED_2: string;
                    OFF_1: string;
                    OTH_1: string;
                    OTH_2: string;
                    PAR_1: string;
                    REC_1: string;
                    RES_1: string;
                    RES_2: string;
                    RES_3: string;
                    RES_4: string;
                    RET_1: string;
                    RET_2: string;
                    RET_3: string;
                    STO_1: string;
                };
                ConstructionMaterial: {
                    BRI_1: string;
                    CON_1: string;
                    MET_1: string;
                    OTH_1: string;
                    WOD_1: string;
                };
                EnvironmentalClass: {
                    BREEAM_EXCELLENT: string;
                    BREEAM_GOOD: string;
                    BREEAM_IN_USE: string;
                    BREEAM_OUTSTANDING: string;
                    BREEAM_PASS: string;
                    BREEAM_VERY_GOOD: string;
                    ENVIRONMENTAL_BUILDING_BRONZE: string;
                    ENVIRONMENTAL_BUILDING_CLASSIFIED: string;
                    ENVIRONMENTAL_BUILDING_GOLD: string;
                    ENVIRONMENTAL_BUILDING_SILVER: string;
                    GREEN_BUILDING: string;
                    LEED_CERTIFIED: string;
                    LEED_GOLD: string;
                    LEED_PLATINUM: string;
                    LEED_SILVER: string;
                };
            };
            Component: {
                ConsType: {
                    by_area: string;
                    manual: string;
                    specific: string;
                    unmeasured: string;
                    virtual: string;
                };
                Type: {
                    building: string;
                    building_outdoor: string;
                    building_services: string;
                    tenant: string;
                    tenant_by_landlord: string;
                };
            };
            CostData: {
                WaterFlow: {
                    'Q3 >16 (Qn >10) x 1': string;
                    'Q3 4 (Qn 2,5) x 1': string;
                    'Q3 4 (Qn 2,5) x 2': string;
                    'Q3 4 (Qn 2,5) x 3': string;
                    'Q3 4 (Qn 2,5) x 4': string;
                    'Q3 10 (Qn 6) x 1': string;
                    'Q3 10 (Qn 6) x 2': string;
                    'Q3 10 (Qn 6) x 3': string;
                    'Q3 10 (Qn 6) x 4': string;
                    'Q3 16 (Qn 10) x 1': string;
                    'Q3 16 (Qn 10) x 2': string;
                    'Q3 16 (Qn 10) x 3': string;
                    'Q3 16 (Qn 10) x 4': string;
                };
            };
            Customer: {
                Industry: {
                    HOT_1: string;
                    IND_1: string;
                    INV_1: string;
                    LOG_1: string;
                    OFF_1: string;
                    RES_1: string;
                    RET_1: string;
                };
                StandardArea: {
                    ATemp: string;
                    BOA: string;
                    BOALOA: string;
                    BRA: string;
                    BTA: string;
                    LOA: string;
                };
            };
            DDCache: {
                BaseMonths: {
                    july: string;
                    'june/august': string;
                };
                DDCalcType: {
                    base: string;
                    none: string;
                    percent: string;
                };
            };
            EPC: {
                RadonMeasure: {
                    no: string;
                    partial: string;
                    yes: string;
                };
                Rating: {
                    A: string;
                    B: string;
                    C: string;
                    D: string;
                    E: string;
                    F: string;
                    G: string;
                    X: string;
                };
                Reason: {
                    building_mismatch: string;
                    multiple_buildings: string;
                    multiple_properties: string;
                    partial_multi_property: string;
                    partial_property: string;
                    property_is_building: string;
                };
                Status: {
                    found: string;
                    not_found: string;
                    partially_found: string;
                };
                VentilationControl: {
                    no: string;
                    partial: string;
                    yes: string;
                };
            };
            MatrixCost: {
                MatrixKey: {
                    CHARGINGEFFECT: string;
                    ENERGYCAPACITY: string;
                    FUSESIZE: string;
                    SERIES_TOP3_ROLLING12: string;
                    SUBSCRIBEDEFFECT: string;
                    WATERFLOW: string;
                    WATERMETERSIZE: string;
                };
                MatrixType: {
                    ENERGY_VALUE_YEARLY: string;
                    FIXEDMONTHLY: string;
                    FIXEDYEARLY: string;
                    PRICE: string;
                    PRICE_MONTHLY: string;
                    SERIES: string;
                    SERIES_TOP_MONTH: string;
                    SERIES_TOP3_MONTH: string;
                };
            };
            Meter: {
                DefaultDataType: {
                    cons: string;
                    ms: string;
                };
                DefaultUOM: {
                    GJ: string;
                    MWh: string;
                    h: string;
                    kWh: string;
                    kg: string;
                    km: string;
                    litres: string;
                    m3: string;
                    none: string;
                    percent: string;
                };
                Distributor: {
                    COLDWATER: {
                        'AB Borlänge Energi': string;
                        'AB Boxholmsteknik': string;
                        'Aarhus Vand A/S': string;
                        'Administrationsservice Fyn A/S': string;
                        'Ale kommun': string;
                        'Alingsås kommun': string;
                        'Alvesta kommun': string;
                        'Aneby Miljö & Vatten AB': string;
                        'Arboga kommun': string;
                        'Arjeplogs kommun': string;
                        'Arvidsjaurs kommun': string;
                        'Arvika Teknik AB': string;
                        'Askersunds kommun': string;
                        'Avesta VA och Avfall AB': string;
                        'Avesta kommun': string;
                        'Bengtsfors kommun': string;
                        'Bergs kommun': string;
                        'Bjurholms kommun': string;
                        'BlueKolding A/S': string;
                        'Bodens kommun': string;
                        'Bollebygds kommun': string;
                        'Borgholms Energi AB': string;
                        'Borgholms kommun': string;
                        'Borlänge kommun': string;
                        'Borås Energi och Miljö AB': string;
                        'Borås stad': string;
                        'Botkyrka kommun': string;
                        'Bramdrupdam Vandværk': string;
                        'Bräcke kommun': string;
                        'Dala Vatten och Avfall AB': string;
                        'Dals-Eds kommun': string;
                        'Danderyds kommun': string;
                        'Degerfors kommun': string;
                        'Dorotea kommun': string;
                        'Eda kommun': string;
                        'Eidsiva Energi AS': string;
                        'Ekerö kommun': string;
                        'Eksjö Energi AB': string;
                        'Emmaboda Energi & Miljö AB': string;
                        'Enegia Market Services Oy': string;
                        'Enköpings kommun': string;
                        'Eskilstuna Energi & Miljö AB': string;
                        'Essunga kommun': string;
                        'Falköpings kommun': string;
                        'Falu Energi & Vatten AB': string;
                        'Filipstads kommun': string;
                        'Finspångs Tekniska Verk AB': string;
                        'Fors A/S': string;
                        'Forshaga kommun': string;
                        'Gislaveds kommun': string;
                        'Glostrup Forsyning': string;
                        'Gnesta kommun': string;
                        'Gnosjö kommun': string;
                        'Grums kommun': string;
                        'Gryaab AB': string;
                        'Grästorps kommun': string;
                        'Gullspångs kommun': string;
                        'Gällivare kommun': string;
                        'Gästrike Vatten AB': string;
                        'Gävle kommun Miljö och hälsa': string;
                        'Göteborgs Stad Kretslopp och vatten': string;
                        'Göteborgsregionens kommunalförbund': string;
                        'Götene Vatten & Värme AB': string;
                        'Götene kommun': string;
                        'Habo kommun': string;
                        'Hagfors kommun': string;
                        'Hallsbergs kommun': string;
                        'Hallstahammars kommun': string;
                        'Halmstads kommun': string;
                        'Hammarö kommun': string;
                        'Haninge kommun': string;
                        'Haparanda Stad': string;
                        'Heby kommun': string;
                        'Hedemora Energi AB': string;
                        'Hedemora kommun': string;
                        'Helsinge Vatten AB': string;
                        'Herrljunga Vatten AB': string;
                        'Hjo kommun': string;
                        'Hudiksvalls kommun': string;
                        'Hylte kommun': string;
                        'Härjedalens kommun': string;
                        'Härnösand Energi & Miljö AB': string;
                        'Härryda kommun': string;
                        'Hässleholms Vatten AB': string;
                        'Håbo kommun': string;
                        'Höganäs kommun': string;
                        'Jokkmokks kommun': string;
                        'Järfälla kommun': string;
                        'Jönköpings kommun': string;
                        'Kalix kommun': string;
                        'Kalmar Vatten AB': string;
                        'Karlsborgs kommun': string;
                        'Karlshamns kommun': string;
                        'Karlskoga kommun': string;
                        'Karlskrona kommun': string;
                        'Karlstads kommun': string;
                        'Kils kommun': string;
                        'Kinda kommun': string;
                        'Kiruna kommun': string;
                        'Klippans kommun': string;
                        'Kramfors kommun': string;
                        'Kristianstads kommun': string;
                        'Kristinehamns kommun': string;
                        'Krokoms kommun': string;
                        'Kumla kommun': string;
                        'Kungsbacka kommun': string;
                        'Kungsörs Vatten AB': string;
                        'Kungälvs kommun': string;
                        Käppalaförbundet: string;
                        'Kävlinge kommun': string;
                        'LEVA i Lysekil AB': string;
                        'Laholmsbukten VA': string;
                        'Laxå Vatten AB': string;
                        'Lekebergs kommun': string;
                        'Lerums kommun': string;
                        'Lessebo kommun': string;
                        'Lidingö Stad': string;
                        'Lidköpings kommun': string;
                        'Lilla Edets kommun': string;
                        'Linköpings kommun': string;
                        'Ljungby kommun': string;
                        'Ljusdals Vatten AB': string;
                        'Lomma kommun': string;
                        'Luleå kommun': string;
                        'Lycksele Avfall och Vatten AB': string;
                        'Malå kommun': string;
                        'Mariestads kommun': string;
                        'Markaryds kommun': string;
                        'Marks kommun': string;
                        'Melleruds kommun': string;
                        'Miljö och Vatten i Örnsköldsvik AB': string;
                        'MittSverige Vatten & Avfall AB': string;
                        'Mittskåne Vatten': string;
                        'Mjölby kommun': string;
                        'Mora Vatten AB': string;
                        'Motala kommun': string;
                        'Mullsjö Energi & Miljö AB': string;
                        'Mullsjö kommun': string;
                        'Munkfors kommun': string;
                        'Mölndals stad': string;
                        'Mönsterås kommun': string;
                        'Mörbylånga kommun': string;
                        'NSVA Nordvästra Skånes': string;
                        NVK: string;
                        'Nacka Vatten och Avfall AB': string;
                        'Nacka kommun': string;
                        'Njudung Energi Vetlanda AB': string;
                        'Nordmalings kommun': string;
                        'Norra Dalarna Vatten och Avfall AB, NODAVA': string;
                        'Norra Västmanlands': string;
                        'Norra Västmanlands Kommunalteknikförbund': string;
                        'Norrköping Vatten och Avfall AB': string;
                        'Norrköpings kommun': string;
                        'Norrtälje kommun': string;
                        Norrvatten: string;
                        'Norsjö kommun': string;
                        'Nybro Elnät AB': string;
                        'Nykvarns kommun': string;
                        'Nyköping-Oxelösund': string;
                        'Nyköpings kommun Nyköping Vatten': string;
                        'Nynäshamns kommun': string;
                        'Nässjö Affärsverk AB': string;
                        'Nässjö kommun': string;
                        'Orust kommun': string;
                        'Oskarshamns kommun': string;
                        Other: string;
                        'Oxelö Energi AB': string;
                        'Pajala kommun': string;
                        'Partille kommun': string;
                        'Perstorps kommun': string;
                        'Piteå Renhållning & Vatten AB': string;
                        'Piteå kommun': string;
                        'Ragunda kommun': string;
                        'Region Gotland': string;
                        'Robertsfors kommun': string;
                        'Ronneby Miljö & Teknik AB': string;
                        'Roslagsvatten AB': string;
                        SYVAB: string;
                        'Sala kommun': string;
                        'Salems kommun': string;
                        'Samhällsbyggnad Bergslagen': string;
                        'Sandviken Energi Vatten AB': string;
                        'Sandvikens kommun': string;
                        'Sigtuna Vatten & Renhållning AB': string;
                        'Sigtuna kommun': string;
                        'Simrishamns kommun': string;
                        'Sjöbo kommun': string;
                        'Skara Energi AB': string;
                        'Skaraborgsvatten KF': string;
                        'Skellefteå kommun': string;
                        'Skinnskattebergs kommun': string;
                        'Skurups kommun': string;
                        'Skåne Blekinge Vattentjänst AB, SBVT': string;
                        'Skövde kommun': string;
                        'Sollefteå kommun': string;
                        'Sollentuna Energi och Miljö AB': string;
                        'Sollentuna kommun': string;
                        'Solna Stad': string;
                        'Solna Vatten AB': string;
                        'Sorsele kommun': string;
                        'Staffanstorps kommun': string;
                        'Stenungsunds kommun': string;
                        'Stockholm Vatten och Avfall AB': string;
                        'Storfors kommun': string;
                        'Storumans kommun': string;
                        'Strängnäs Energi Vatten AB, SEVAB': string;
                        'Strängnäs kommun': string;
                        'Strömstads kommun': string;
                        'Strömsunds kommun': string;
                        'Sundbybergs Avfall och Vatten AB': string;
                        'Sunne kommun': string;
                        'Surahammars Kommunalteknik AB': string;
                        'Svedala kommun': string;
                        'Svenljunga kommun': string;
                        'Sydvatten AB': string;
                        'Säffle kommun': string;
                        'Säters kommun': string;
                        'Sävsjö kommun': string;
                        'Söderhamn Nära AB': string;
                        'Söderhamns kommun': string;
                        'Söderköpings kommun': string;
                        'Södertälje kommun': string;
                        'Sölvesborg Energi och Vatten AB': string;
                        'Sörmland Vatten o Avfall AB': string;
                        'Tanums kommun': string;
                        'Tekniska Verken i Kiruna AB': string;
                        'Tekniska Verken i Linköping AB': string;
                        'Telge Nät AB': string;
                        'Tibro kommun': string;
                        'Tidaholms kommun': string;
                        'Tierps Energi & Miljö AB': string;
                        'Tingsryds kommun': string;
                        'Tjörns kommun': string;
                        'Tomelilla kommun': string;
                        'Torsby kommun': string;
                        'Torsås kommun': string;
                        'Tranemo kommun': string;
                        'Tranås kommun': string;
                        'Trelleborgs kommun': string;
                        'Trollhättan Energi AB': string;
                        'Trosa kommun': string;
                        'Tyresö kommun': string;
                        'Täby kommun': string;
                        'Töreboda kommun': string;
                        'Ulricehamns Energi AB': string;
                        'Ulricehamns kommun': string;
                        'Upplands Bro kommun': string;
                        'Upplands Väsby kommun': string;
                        'Uppsala Vatten och Avfall AB': string;
                        'Uppsala kommun': string;
                        'Uppvidinge kommun': string;
                        'VA SYD': string;
                        'VA-Bolaget i Karlskoga AB': string;
                        'Vadstena kommun': string;
                        'Vaggeryds kommun': string;
                        'Vakin, Vatten- och Avfallskompetens i Norr AB': string;
                        'Valdemarsviks kommun': string;
                        'Vara kommun': string;
                        'Vatten & Avfall i Malung-Sälen AB, VAMAS': string;
                        'Vatten & Miljö i Väst AB, VIVAB': string;
                        'Vatten och Avlopp AB': string;
                        'Vellinge kommun': string;
                        'Vilhelmina kommun': string;
                        'Vimmerby Energi & Miljö AB': string;
                        'Vänersborgs kommun': string;
                        'Vännäs kommun': string;
                        'Värmdö kommun': string;
                        'Värnamo kommun': string;
                        'Västervik Miljö & Energi AB, VMEAB': string;
                        'Västerås stad': string;
                        'Västra Mälardalens Energi & Miljö AB': string;
                        'Västvatten AB': string;
                        'Växjö kommun': string;
                        'Vårgårda kommun': string;
                        'Wessman Barken Vatten och Återvinning AB': string;
                        'Ydre kommun': string;
                        'Ystads kommun': string;
                        'Älmhults kommun': string;
                        'Älvsbyns Energi AB': string;
                        'Älvsbyns kommun': string;
                        'Ängelholms kommun': string;
                        'Åmåls kommun': string;
                        'Ånge kommun': string;
                        'Åre kommun': string;
                        'Årjängs kommun': string;
                        'Åsele kommun': string;
                        'Åtvidabergs Vatten AB': string;
                        'Öckerö kommun': string;
                        'Ödeshögs kommun': string;
                        'Örebro kommun': string;
                        'Örkelljunga kommun': string;
                        'Örnsköldsviks kommun': string;
                        'Östersunds kommun': string;
                        'Östra Smålands Kommunalteknikförbund': string;
                        'Överkalix kommun': string;
                        'Övertorneå kommun': string;
                    };
                    COOLING: {
                        'Adven Energilösningar AB': string;
                        'Affärsverken Karlskrona AB': string;
                        'Alingsås Energi Nät AB': string;
                        'Alvesta Energi AB': string;
                        'Aneby Miljö & Vatten AB': string;
                        'Arboga Energi AB': string;
                        'Arvidsjaurs Energi AB': string;
                        'Arvika Fjärrvärme AB': string;
                        BTEA: string;
                        'Bengtsfors Energi': string;
                        Bionär: string;
                        'Bodens Energi AB': string;
                        'Bollnäs Energi AB': string;
                        'Borgholm Energi AB': string;
                        'Borlänge Energi AB': string;
                        'Borås Energi och Miljö AB': string;
                        'Bromölla fjärrvärme AB': string;
                        'C4 Energi AB': string;
                        'Dala Energi': string;
                        'Degerfors Energi AB': string;
                        'EDA Energi AB': string;
                        'ENA Energi AB': string;
                        'EON Värme Sverige': string;
                        'Eidsiva Energi AS': string;
                        'Eksjö Energi AB': string;
                        'Elektra Värme AB': string;
                        'Emmaboda Energi AB': string;
                        'Enegia Market Services Oy': string;
                        'Enycon AB': string;
                        'Eskilstuna Energi & Miljö AB': string;
                        'Falbygdens Energi AB': string;
                        'Falkenberg Energi AB': string;
                        'Falu Energi & Vatten AB': string;
                        'Farmarenergi i Ed AB': string;
                        'Finspångs Tekniska Verk AB': string;
                        'Fjärrvärme i Osby AB': string;
                        'Forshaga Energi AB': string;
                        'Gislaved Energi': string;
                        'Gotlands Energi AB': string;
                        'Gällivare Värmeverk AB': string;
                        'Gävle Energi AB': string;
                        'Göteborg Energi AB': string;
                        'Götene Vatten & Värme AB': string;
                        'Habo Energi AB': string;
                        'Hagfors Energi AB': string;
                        'Halmstads Energi och Miljö AB': string;
                        'Hammarö Energi AB': string;
                        'Hardanger Energi AS': string;
                        'Hedemora Energi AB': string;
                        'Helen Oy': string;
                        'Herrljunga Elektriska AB': string;
                        'Hjo Energi AB': string;
                        'Härnösand Energi & Miljö AB': string;
                        'Hässleholm Miljö AB': string;
                        'Höganäs Fjärrvärme AB': string;
                        'Jokkmokks Värmeverk AB': string;
                        'Jämtkraft AB': string;
                        'Jämtlandsvärme AB': string;
                        'Jönköping Energi AB': string;
                        'Kalmar Energi Värme AB': string;
                        'Karlsborg Energi AB': string;
                        'Karlshamn Energi AB': string;
                        'Karlskoga Energi & Miljö AB': string;
                        'Karlstads Energi AB': string;
                        'Kils Energi AB': string;
                        'Kraftringen Energi AB': string;
                        'Kristinehamns Fjärrvärme AB': string;
                        'Kungälv Energi AB': string;
                        'LEVA i Lysekil AB': string;
                        'Landskrona Energi AB': string;
                        'Lantmännen Agrovärme AB': string;
                        'LaxåVärme Aktiebolag': string;
                        'Lekeberg Bioenergi AB': string;
                        'Lerum Fjärrvärme AB': string;
                        'Lessebo fjärrvärme AB': string;
                        'Lidköpings Värmeverk AB': string;
                        'Lilla Edets Fjärrvärme AB': string;
                        'Linde Energi AB': string;
                        'Ljungby Energi AB': string;
                        'Ljusdal Energi AB': string;
                        'Luleå Energi AB': string;
                        'Lunds Energikoncern AB': string;
                        'Malung-Sälenskommun Värmeverket': string;
                        'Mariestad-Töreboda Energi AB': string;
                        'Marks Värme AB': string;
                        'Mjölby-Svartådalen Energi AB': string;
                        'Mullsjö Energi & MIljö AB': string;
                        'Munkfors Värmeverk AB': string;
                        'Mälarenergi AB': string;
                        'Mölndal Energi AB': string;
                        'Mörbylånga Kommun': string;
                        'Nevel AB': string;
                        'Njudung Energi Vetlanda AB': string;
                        'Norrenergi AB': string;
                        'Norrtälje Energi AB': string;
                        'Nybro Energi AB': string;
                        'Nässjö Affärsverk AB': string;
                        'Olotröms Kraft AB': string;
                        'Oskarshamn Energi AB': string;
                        Other: string;
                        'Oxelö Energi AB': string;
                        'Pajala Värmeverk AB': string;
                        'Peab Energi AB': string;
                        'Perstorps Fjärrvärme AB': string;
                        'Pite Energi AB': string;
                        'Ragunda Energi Teknik AB': string;
                        'Rindi Energi AB': string;
                        'Ronneby Miljö och Teknik AB': string;
                        'Rättviks Teknik AB': string;
                        'Sala-Heby Energi AB': string;
                        'Sandviken Energi AB': string;
                        'Skara Energi AB': string;
                        'Skellefteå Kraft AB': string;
                        'Skånska Energi Värme & Kyla AB': string;
                        'Skövde Värmeverk AB': string;
                        'Smedjebacken Energi AB': string;
                        'Sollentuna Energi AB': string;
                        'Solör Bioenergi Fjärrvärme AB': string;
                        'Sorsele kommun': string;
                        'Statkraft Varme AS': string;
                        'Statkraft Värme AB': string;
                        'Stenungsunds Energi och Miljö AB': string;
                        'Stockholm Exergi AB': string;
                        'Strängnäs Energi AB': string;
                        'Sundsvall Energi AB': string;
                        'Svenljunga Energi AB': string;
                        'Sävsjö Energi AB': string;
                        'Söderhamn Nära AB': string;
                        'Södertörns Fjärrvärme AB': string;
                        'Sölvesborgs Energi och Vatten AB': string;
                        'Tekniska Verken i Kiruna AB': string;
                        'Tekniska Verken i Linköping AB': string;
                        'Telge Nät AB': string;
                        'Tidaholms Energi AB': string;
                        'Tierps Fjärrvärme AB': string;
                        'Torsby kommun': string;
                        'Torsås Fjärrvärme AB': string;
                        'Tranås Energi AB': string;
                        'Trelleborgs Fjärrvärme AB': string;
                        'Trollhättan Energi AB': string;
                        'Tussa Energi AS': string;
                        'Uddevalla Energi AB': string;
                        'Ulricehamns Energi AB': string;
                        'Umeå Energi AB': string;
                        'Vaggeryds Energi AB': string;
                        'Vantaan Energia Oy': string;
                        'Vara Värme AB': string;
                        'Varberg Energi AB': string;
                        'Vasa Holding Värme': string;
                        'Vattenfall AB': string;
                        'Vimmerby Energi AB': string;
                        'VänerEnergi AB': string;
                        'Värmevärden AB': string;
                        'Värnamo Energi AB': string;
                        'Västerbergslagens Energi AB': string;
                        'Västervik Miljö & Energi AB': string;
                        'Västra Mälardalens Energi & Miljö AB': string;
                        'Växjö Energi AB': string;
                        'Ystad Energi AB': string;
                        'Älvsbyns Fjärrvärme': string;
                        'Ånge Energi AB': string;
                        'Åsele Energi AB': string;
                        'Öresundskraft AB': string;
                        'Örkelljunga Fjärrvärmeverk AB': string;
                        'Österlens Kraft AB': string;
                        'Överkalix kommun': string;
                        'Övik Energi AB': string;
                    };
                    ELECTRICITY: {
                        'Affärsverken Elnät i Karlskrona': string;
                        'Ale Elförening ek för': string;
                        'Alingsås Energi Nät AB': string;
                        'Almnäs Bruk AB': string;
                        'Alvesta Elnät AB': string;
                        'Arvika Teknik AB': string;
                        'BKK Nett AS': string;
                        'Baltic Cable AB': string;
                        'Bengtsfors Energi Nät AB': string;
                        'Bergs Tingslags Elektriska AB': string;
                        'BillerudKorsnäs Skog & Industri AB': string;
                        'Bjäre Kraft ek för': string;
                        'Bjärke Energi ek för': string;
                        'Bliekevare Nät AB': string;
                        'Blåsjön Nät AB': string;
                        'Boda Nät ek för': string;
                        'Bodens Energi Nät AB': string;
                        'Boo Energi ek för': string;
                        'Borgholm Energi Elnät AB': string;
                        'Borlänge Energi Elnät AB': string;
                        'Borås Energi Nät AB': string;
                        'Brittedals Elnät ek för': string;
                        'Brobacken Nät AB': string;
                        'Bromölla Energi och Vatten AB': string;
                        'C4 Elnät AB': string;
                        'Carlfors Bruk KB': string;
                        'Caruna Oy': string;
                        'Dala Elnät AB': string;
                        'Dala Energi Elnät AB': string;
                        'Degerfors Energi AB': string;
                        'Dragaliden Net AB': string;
                        'EON Elnät Stockholm AB': string;
                        'EON Elnät Sverige AB': string;
                        'Eksjö Elnät AB': string;
                        'Elektra Nät AB': string;
                        'Elkraft AS': string;
                        'Elkraft Sverige AB': string;
                        'Ellevio AB': string;
                        'Elverket Vallentuna Elnät AB': string;
                        'Elvia A/S': string;
                        'Emmaboda Elnät AB': string;
                        'Enegia Market Services Oy': string;
                        'Energijos Skirstymo Operatorius AB': string;
                        'Energinet Eltransmission A/S': string;
                        'Envikens Elnät AB': string;
                        'Eskilstuna Energi & Miljö Elnät': string;
                        Ewii: string;
                        'Falbygdens Energi Nät AB': string;
                        'Falkenberg Energi AB': string;
                        'Falu Elnät AB': string;
                        'Filipstad Energinät AB': string;
                        'Fredrikstad Energinett AS': string;
                        'Gabrielsberget Net AB': string;
                        'Gislaved Energi Elnät AB': string;
                        'Gotlands Elnät AB': string;
                        'Grästorp Energi ek för': string;
                        'Gävle Energi AB': string;
                        'Göteborg Energi Nät AB': string;
                        'Götene Elförening ek för': string;
                        'Habo Kraft AB': string;
                        'Hallstaviks Elverk ek för': string;
                        'Halmstads Energi och Miljö Nät AB': string;
                        'Hamra Besparingsskog': string;
                        'Hardanger Energi Nett AS': string;
                        'Havsnäs Vindkraft Elnät AB': string;
                        'Hedemora Energi AB': string;
                        'Helen Sähköverkko Oy': string;
                        'Herrljunga Elektriska AB': string;
                        'Hjo Energi AB': string;
                        'Hjärtums Elförening ek för': string;
                        'Hofors Elverk AB': string;
                        'Holmen Energi Elnät AB': string;
                        'Härjeåns Nät AB': string;
                        'Härnösand Elnät AB': string;
                        'Härryda Energi AB': string;
                        'Hålogaland Kraft AS': string;
                        'Höganäs Energi AB': string;
                        'Jukkasjärvi Sockens Belysningsfö': string;
                        'Jämtkraft Elnät AB': string;
                        'Jönköping Energi Nät AB': string;
                        'Kalmar Energi Elnät AB': string;
                        'Karlsborgs Energi AB': string;
                        'Karlshamn Energi AB': string;
                        'Karlskoga Elnät AB': string;
                        'Karlstads El- och Stadsnät AB': string;
                        'Kraftringen Nät AB': string;
                        'Kristinehamns Elnät AB': string;
                        'Kungälv Energi AB': string;
                        'Kvarnforsen Nät AB': string;
                        'Kvänumbygdens Energi ek för': string;
                        'LEVA i Lysekil AB': string;
                        'LKAB Nät AB': string;
                        'Landskrona Energi AB': string;
                        'Lappeenrannan Energiaverkot Oy': string;
                        'Lerum Energi AB': string;
                        'Lidköping Elnät': string;
                        'Linde Energi AB': string;
                        'Ljungby Energinät AB': string;
                        'Ljusdal Elnät AB': string;
                        'Luleå Energi Elnät AB': string;
                        'Lyse Elnett AS': string;
                        'Malungs Elnät AB': string;
                        'Mellersta Skånes Kraft ek för': string;
                        'Mjölby Kraftnät AB': string;
                        'Mullbergs Elnät AB': string;
                        'Mälarenergi Elnät AB': string;
                        'Mölndal Energi Nät AB': string;
                        'Mørenett AS': string;
                        'Nacka Energi AB': string;
                        'Njudung Energi Sävsjö AB': string;
                        'Njudung Vetlanda Elnät AB': string;
                        'Nordmöre Energiverk AS': string;
                        'Norrtälje Energi AB': string;
                        'Nossebroortens Energi ek för': string;
                        'Nybro Elnät AB': string;
                        'Nynäshamn Energi AB': string;
                        'Näckåns Elnät AB': string;
                        'Nässjö Affärsverk Elnät AB': string;
                        'Olofströms Kraft Nät AB': string;
                        'Olseröds Elektriska Distribution': string;
                        'Oppdal Everk AS': string;
                        'Oskarshamn Energi Nät AB': string;
                        Other: string;
                        'Ovako Sweden AB': string;
                        'Oxelö Energi AB': string;
                        'Partille Energi Nät AB': string;
                        'Pite Energi AB': string;
                        'Ronneby Miljö o Teknik AB': string;
                        'Röbergsfjället Nät AB': string;
                        'Rödeby Elverk ek för': string;
                        'SEVAB Nät AB': string;
                        'Sala-Heby Energi Elnät AB': string;
                        'Sandhult-Sandareds Elektr ek för': string;
                        'Sandviken Energi Elnät AB': string;
                        'Sidensjö Vindkraft Elnät AB': string;
                        'Sjisjka Nät AB': string;
                        'Sjogerstads Elektriska Distributionsförening ek för': string;
                        'Sjöbo Elnät AB': string;
                        'Skara Energi AB': string;
                        'Skellefteå Kraft Elnät AB': string;
                        'Skurups Elverk AB': string;
                        'Skyllbergs Bruks AB': string;
                        'Skånska Energi Nät AB': string;
                        'SkövdeNät AB': string;
                        'Smedjebacken Energi Nät AB': string;
                        'Sollentuna Energi och Miljö AB': string;
                        'Staffanstorps Energi AB': string;
                        'Statkraft Energi AS': string;
                        'Stensjön Kraft AB': string;
                        'Sturefors Eldistribution AB': string;
                        'Sundsvall Elnät AB': string;
                        'Swedavia Energi AB': string;
                        'Söderhamn Elnät AB': string;
                        'Södra Hallands Kraft ek för': string;
                        'Sölvesborgs Energi och Vatten AB': string;
                        'Sörbylunds Elnät HB': string;
                        'Tampereen Sähköverkko Oy': string;
                        'Tekniska Verken Katrineholm Nät AB': string;
                        'Tekniska Verken Linköping Nät AB': string;
                        'Telge Nät AB': string;
                        'Tibro Elnät AB': string;
                        'Tidaholm Elnät AB': string;
                        'Tranås Energi Elnät AB': string;
                        'Trelleborg Energi Kommunal Teknik': string;
                        'Trollhättan Energi Elnät AB': string;
                        'Troms Kraft Nett AS': string;
                        'TrønderEnergi Nett AS': string;
                        'Turku Energia Sähköverkot Oy': string;
                        'Tussa Kraft AS': string;
                        'Töre Energi ek för': string;
                        'Uddevalla Energi Elnät AB': string;
                        'Ulricehamns Energi AB': string;
                        'Umeå Energi Elnät AB': string;
                        'Upplands Energi ek för': string;
                        'Vaggeryds Elverk': string;
                        'Vallebygdens Energi ek för': string;
                        'Vantaan Energia Sähköverkot Oy': string;
                        'Vara Energi ek för': string;
                        'Varberg Energi AB': string;
                        'Varbergsortens Elkraft ek för': string;
                        'Vattenfall Eldistribution AB': string;
                        'Vattenfall Indalsälven AB': string;
                        'Viggafors Elektriska andelsförening upa': string;
                        'Vimmerby Energi Nät AB': string;
                        'VindIn Elnät AB': string;
                        'Vindpark Vänern Drift AB': string;
                        'Vinninga Elektriska Förening': string;
                        'VänerEnergi AB': string;
                        'Värnamo Elnät AB': string;
                        'Västerbergslagens Elnät AB': string;
                        'Västerviks Kraft Elnät AB': string;
                        'Västra Orusts Energitjänst ek för': string;
                        'Växjö Energi Elnät AB': string;
                        'YS Nät AB': string;
                        'Ystad Energi AB': string;
                        'Ålem Energi AB': string;
                        'Årsunda Kraft o Belysningsförening': string;
                        'Åsele Elnät AB': string;
                        'Öresundskraft AB': string;
                        'Österlens Kraft AB': string;
                        'Österlens Kraft ek för': string;
                        'Östra Kinds Elkraft ek för': string;
                        'Övertorneå Energi AB': string;
                        'Övik Energi Nät AB': string;
                    };
                    GAS: {
                        'Dansk Gas Distribution A/S': string;
                        'EON Gas Sverige AB': string;
                        'Gasnätet Stockholm AB': string;
                        'Göteborg Energi Gasnät AB': string;
                        'HMN GasNet P/S': string;
                        'Kraftringen Nät AB': string;
                        Other: string;
                        'SEAS-NVE Holding A/S': string;
                        'Swedegas AB': string;
                        'Varberg Energi AB': string;
                        'Öresundskraft AB': string;
                    };
                    HEATING: {
                        'Administrationsservice Fyn A/S': string;
                        'Adven Energilösningar AB': string;
                        'AffaldVarme Aarhus A/S': string;
                        'Affärsverken Karlskrona AB': string;
                        'Agder Energi Varme AS': string;
                        'Ale Fjärrvärme AB': string;
                        'Alingsås Energi Nät AB': string;
                        'Alvesta Energi AB': string;
                        'Aneby Miljö & Vatten AB': string;
                        'Arboga Energi AB': string;
                        'Arvidsjaurs Energi AB': string;
                        'Arvika Fjärrvärme AB': string;
                        'BKK Varme AS': string;
                        BTEA: string;
                        'Bengtsfors Energi': string;
                        Bionär: string;
                        'Bjärke Energi AB': string;
                        'Bodens Energi AB': string;
                        'Bollnäs Energi AB': string;
                        'Borgholm Energi AB': string;
                        'Borlänge Energi AB': string;
                        'Borås Energi och Miljö AB': string;
                        'Bromölla fjärrvärme AB': string;
                        'C4 Energi AB': string;
                        'Dala Energi': string;
                        'Degerfors Energi AB': string;
                        'EDA Energi AB': string;
                        'ENA Energi AB': string;
                        'EON Värme Sverige': string;
                        'Eidsiva Energi AS': string;
                        'Eksjö Energi AB': string;
                        'Elektra Värme AB': string;
                        'Emmaboda Energi AB': string;
                        'Enegia Market Services Oy': string;
                        'Enycon AB': string;
                        'Eskilstuna Energi & Miljö AB': string;
                        Ewii: string;
                        'Falbygdens Energi AB': string;
                        'Falkenberg Energi AB': string;
                        'Falu Energi & Vatten AB': string;
                        'Farmarenergi i Ed AB': string;
                        'Finspångs Tekniska Verk AB': string;
                        'Fjernvarme Fyn A/S': string;
                        'Fjärrvärme i Osby AB': string;
                        'Fors A/S': string;
                        'Forshaga Energi AB': string;
                        'Fortum Oslo Varme AS': string;
                        'Fortum Oyj': string;
                        'Fredrikstad Fjernvarme AS': string;
                        'Gislaved Energi': string;
                        'Glostrup Forsyning': string;
                        'Gotlands Energi AB': string;
                        'Gällivare Värmeverk AB': string;
                        'Gävle Energi AB': string;
                        'Göteborg Energi AB': string;
                        'Götene Vatten & Värme AB': string;
                        'HOFOR A/S': string;
                        'Habo Energi AB': string;
                        'Hagfors Energi AB': string;
                        'Halmstads Energi och Miljö AB': string;
                        'Hammarö Energi AB': string;
                        'Haparanda Värmeverk AB': string;
                        'Hardanger Energi AS': string;
                        'Hedemora Energi AB': string;
                        'Helen Oy': string;
                        'Herrljunga Elektriska AB': string;
                        'Hjo Energi AB': string;
                        'Hyvinkään Lämpövoima Oy': string;
                        'Härnösand Energi & Miljö AB': string;
                        'Hässleholm Miljö AB': string;
                        'Höganäs Energi AB': string;
                        'Jokkmokks Värmeverk AB': string;
                        'Jämtkraft AB': string;
                        'Jämtlandsvärme AB': string;
                        'Jönköping Energi AB': string;
                        'Kalmar Energi Värme AB': string;
                        'Karlsborg Energi AB': string;
                        'Karlshamn Energi AB': string;
                        'Karlskoga Energi & Miljö AB': string;
                        'Karlstads Energi AB': string;
                        'Kils Energi AB': string;
                        'Kraftringen Energi AB': string;
                        'Kristinehamns Fjärrvärme AB': string;
                        'Kungälv Energi AB': string;
                        'Kvitebjørn Varme AS': string;
                        'LEVA i Lysekil AB': string;
                        'Landskrona Energi AB': string;
                        'Lantmännen Agrovärme AB': string;
                        'Lappeenrannan Energia Oy': string;
                        'LaxåVärme Aktiebolag': string;
                        'Lekeberg Bioenergi AB': string;
                        'Lerum Fjärrvärme AB': string;
                        'Lessebo fjärrvärme AB': string;
                        'Lidköpings Värmeverk AB': string;
                        'Lilla Edets Fjärrvärme AB': string;
                        'Linde Energi AB': string;
                        'Ljungby Energi AB': string;
                        'Ljusdal Energi AB': string;
                        'Longyearbyens lokalstyre': string;
                        'Luleå Energi AB': string;
                        'Lunds Energikoncern AB': string;
                        'Malung-Sälenskommun Värmeverket': string;
                        'Mariestad-Töreboda Energi AB': string;
                        'Marks Värme AB': string;
                        'Miljøvarme VSEB AS': string;
                        'Mjölby-Svartådalen Energi AB': string;
                        'Mo Fjernvarme AS': string;
                        'Mullsjö Energi & MIljö AB': string;
                        'Munkfors Värmeverk AB': string;
                        'Mälarenergi AB': string;
                        'Mölndal Energi AB': string;
                        'Mörbylånga Kommun': string;
                        'Nevel AB': string;
                        'Njudung Energi Vetlanda AB': string;
                        'Norrenergi AB': string;
                        'Norrtälje Energi AB': string;
                        'Nybro Energi AB': string;
                        'Nässjö Affärsverk AB': string;
                        'Olotröms Kraft AB': string;
                        'Oskarshamn Energi AB': string;
                        Other: string;
                        'Oulun Energia Oy': string;
                        'Oxelö Energi AB': string;
                        'Pajala Värmeverk AB': string;
                        'Partille Energi AB': string;
                        'Peab Energi AB': string;
                        'Perstorps Fjärrvärme AB': string;
                        'Pite Energi AB': string;
                        'Ragunda Energi Teknik AB': string;
                        'Rindi Energi AB': string;
                        'Ronneby Miljö och Teknik AB': string;
                        'Rättviks Teknik AB': string;
                        'Sala-Heby Energi AB': string;
                        'Sandviken Energi AB': string;
                        'Skara Energi AB': string;
                        'Skellefteå Kraft AB': string;
                        'Skånska Energi Värme & Kyla AB': string;
                        'Skövde Värmeverk AB': string;
                        'Smedjebacken Energi AB': string;
                        'Sollentuna Energi AB': string;
                        'Solör Bioenergi Fjärrvärme AB': string;
                        'Sorsele kommun': string;
                        'Statkraft Varme AS': string;
                        'Statkraft Värme AB': string;
                        'Stenungsunds Energi och Miljö AB': string;
                        'Stockholm Exergi AB': string;
                        'Strängnäs Energi AB': string;
                        'Sundsvall Energi AB': string;
                        'Svedala Fjärrvärme AB': string;
                        'Svenljunga Energi AB': string;
                        'Sävsjö Energi AB': string;
                        'Söderhamn Nära AB': string;
                        'Södertörns Fjärrvärme AB': string;
                        'Sölvesborgs Energi och Vatten AB': string;
                        'Tafjord Kraftvarme AS': string;
                        'Tampereen Sähkölaitos Oy': string;
                        'Tekniska Verken i Kiruna AB': string;
                        'Tekniska Verken i Linköping AB': string;
                        'Telge Nät AB': string;
                        'Tidaholms Energi AB': string;
                        'Tierps Fjärrvärme AB': string;
                        'Torsby kommun': string;
                        'Torsås Fjärrvärme AB': string;
                        'Tranås Energi AB': string;
                        'Trelleborgs Fjärrvärme AB': string;
                        'Trollhättan Energi AB': string;
                        'Turku Energia-Åbo Energi Ab, Oy': string;
                        'Tussa Energi AS': string;
                        'Uddevalla Energi AB': string;
                        'Ulricehamns Energi AB': string;
                        'Umeå Energi AB': string;
                        'Vaggeryds Energi AB': string;
                        'Vantaan Energia Oy': string;
                        'Vara Värme AB': string;
                        'Varberg Energi AB': string;
                        'Vasa Holding Värme': string;
                        'Vattenfall AB': string;
                        'Vejlby Fjernvarme': string;
                        'Vejle Fjernvarme a.m.b.a': string;
                        'Vilniaus šilumos tinklai AB': string;
                        'Vimmerby Energi AB': string;
                        'VänerEnergi AB': string;
                        'Värmevärden AB': string;
                        'Värnamo Energi AB': string;
                        'Västerbergslagens Energi AB': string;
                        'Västervik Miljö & Energi AB': string;
                        'Västra Mälardalens Energi & Miljö AB': string;
                        'Växjö Energi AB': string;
                        'Ystad Energi AB': string;
                        'Älvsbyns Fjärrvärme': string;
                        'Ånge Energi AB': string;
                        'Åsele Energi AB': string;
                        'Öresundskraft AB': string;
                        'Örkelljunga Fjärrvärmeverk AB': string;
                        'Österlens Kraft AB': string;
                        'Överkalix Värmeverk AB': string;
                        'Övik Energi AB': string;
                    };
                    HOTWATER: {
                        'AB Borlänge Energi': string;
                        'AB Boxholmsteknik': string;
                        'Aarhus Vand A/S': string;
                        'Administrationsservice Fyn A/S': string;
                        'Ale kommun': string;
                        'Alingsås kommun': string;
                        'Alvesta kommun': string;
                        'Aneby Miljö & Vatten AB': string;
                        'Arboga kommun': string;
                        'Arjeplogs kommun': string;
                        'Arvidsjaurs kommun': string;
                        'Arvika Teknik AB': string;
                        'Askersunds kommun': string;
                        'Avesta VA och Avfall AB': string;
                        'Avesta kommun': string;
                        'Bengtsfors kommun': string;
                        'Bergs kommun': string;
                        'Bjurholms kommun': string;
                        'BlueKolding A/S': string;
                        'Bodens kommun': string;
                        'Bollebygds kommun': string;
                        'Borgholms Energi AB': string;
                        'Borgholms kommun': string;
                        'Borlänge kommun': string;
                        'Borås Energi och Miljö AB': string;
                        'Borås stad': string;
                        'Botkyrka kommun': string;
                        'Bramdrupdam Vandværk': string;
                        'Bräcke kommun': string;
                        'Dala Vatten och Avfall AB': string;
                        'Dals-Eds kommun': string;
                        'Danderyds kommun': string;
                        'Degerfors kommun': string;
                        'Dorotea kommun': string;
                        'Eda kommun': string;
                        'Eidsiva Energi AS': string;
                        'Ekerö kommun': string;
                        'Eksjö Energi AB': string;
                        'Emmaboda Energi & Miljö AB': string;
                        'Enegia Market Services Oy': string;
                        'Enköpings kommun': string;
                        'Eskilstuna Energi & Miljö AB': string;
                        'Essunga kommun': string;
                        'Falköpings kommun': string;
                        'Falu Energi & Vatten AB': string;
                        'Filipstads kommun': string;
                        'Finspångs Tekniska Verk AB': string;
                        'Fors A/S': string;
                        'Forshaga kommun': string;
                        'Gislaveds kommun': string;
                        'Glostrup Forsyning': string;
                        'Gnesta kommun': string;
                        'Gnosjö kommun': string;
                        'Grums kommun': string;
                        'Gryaab AB': string;
                        'Grästorps kommun': string;
                        'Gullspångs kommun': string;
                        'Gällivare kommun': string;
                        'Gästrike Vatten AB': string;
                        'Gävle kommun Miljö och hälsa': string;
                        'Göteborgs Stad Kretslopp och vatten': string;
                        'Göteborgsregionens kommunalförbund': string;
                        'Götene Vatten & Värme AB': string;
                        'Götene kommun': string;
                        'Habo kommun': string;
                        'Hagfors kommun': string;
                        'Hallsbergs kommun': string;
                        'Hallstahammars kommun': string;
                        'Halmstads kommun': string;
                        'Hammarö kommun': string;
                        'Haninge kommun': string;
                        'Haparanda Stad': string;
                        'Heby kommun': string;
                        'Hedemora Energi AB': string;
                        'Hedemora kommun': string;
                        'Helsinge Vatten AB': string;
                        'Herrljunga Vatten AB': string;
                        'Hjo kommun': string;
                        'Hudiksvalls kommun': string;
                        'Hylte kommun': string;
                        'Härjedalens kommun': string;
                        'Härnösand Energi & Miljö AB': string;
                        'Härryda kommun': string;
                        'Hässleholms Vatten AB': string;
                        'Håbo kommun': string;
                        'Höganäs kommun': string;
                        'Jokkmokks kommun': string;
                        'Järfälla kommun': string;
                        'Jönköpings kommun': string;
                        'Kalix kommun': string;
                        'Kalmar Vatten AB': string;
                        'Karlsborgs kommun': string;
                        'Karlshamns kommun': string;
                        'Karlskoga kommun': string;
                        'Karlskrona kommun': string;
                        'Karlstads kommun': string;
                        'Kils kommun': string;
                        'Kinda kommun': string;
                        'Kiruna kommun': string;
                        'Klippans kommun': string;
                        'Kramfors kommun': string;
                        'Kristianstads kommun': string;
                        'Kristinehamns kommun': string;
                        'Krokoms kommun': string;
                        'Kumla kommun': string;
                        'Kungsbacka kommun': string;
                        'Kungsörs Vatten AB': string;
                        'Kungälvs kommun': string;
                        Käppalaförbundet: string;
                        'Kävlinge kommun': string;
                        'LEVA i Lysekil AB': string;
                        'Laholmsbukten VA': string;
                        'Laxå Vatten AB': string;
                        'Lekebergs kommun': string;
                        'Lerums kommun': string;
                        'Lessebo kommun': string;
                        'Lidingö Stad': string;
                        'Lidköpings kommun': string;
                        'Lilla Edets kommun': string;
                        'Linköpings kommun': string;
                        'Ljungby kommun': string;
                        'Ljusdals Vatten AB': string;
                        'Lomma kommun': string;
                        'Luleå kommun': string;
                        'Lycksele Avfall och Vatten AB': string;
                        'Malå kommun': string;
                        'Mariestads kommun': string;
                        'Markaryds kommun': string;
                        'Marks kommun': string;
                        'Melleruds kommun': string;
                        'Miljö och Vatten i Örnsköldsvik AB': string;
                        'MittSverige Vatten & Avfall AB': string;
                        'Mittskåne Vatten': string;
                        'Mjölby kommun': string;
                        'Mora Vatten AB': string;
                        'Motala kommun': string;
                        'Mullsjö Energi & Miljö AB': string;
                        'Mullsjö kommun': string;
                        'Munkfors kommun': string;
                        'Mölndals stad': string;
                        'Mönsterås kommun': string;
                        'Mörbylånga kommun': string;
                        'NSVA Nordvästra Skånes': string;
                        NVK: string;
                        'Nacka Vatten och Avfall AB': string;
                        'Nacka kommun': string;
                        'Njudung Energi Vetlanda AB': string;
                        'Nordmalings kommun': string;
                        'Norra Dalarna Vatten och Avfall AB, NODAVA': string;
                        'Norra Västmanlands': string;
                        'Norra Västmanlands Kommunalteknikförbund': string;
                        'Norrköping Vatten och Avfall AB': string;
                        'Norrköpings kommun': string;
                        'Norrtälje kommun': string;
                        Norrvatten: string;
                        'Norsjö kommun': string;
                        'Nybro Elnät AB': string;
                        'Nykvarns kommun': string;
                        'Nyköping-Oxelösund': string;
                        'Nyköpings kommun Nyköping Vatten': string;
                        'Nynäshamns kommun': string;
                        'Nässjö Affärsverk AB': string;
                        'Nässjö kommun': string;
                        'Orust kommun': string;
                        'Oskarshamns kommun': string;
                        Other: string;
                        'Oxelö Energi AB': string;
                        'Pajala kommun': string;
                        'Partille kommun': string;
                        'Perstorps kommun': string;
                        'Piteå Renhållning & Vatten AB': string;
                        'Piteå kommun': string;
                        'Ragunda kommun': string;
                        'Region Gotland': string;
                        'Robertsfors kommun': string;
                        'Ronneby Miljö & Teknik AB': string;
                        'Roslagsvatten AB': string;
                        SYVAB: string;
                        'Sala kommun': string;
                        'Salems kommun': string;
                        'Samhällsbyggnad Bergslagen': string;
                        'Sandviken Energi Vatten AB': string;
                        'Sandvikens kommun': string;
                        'Sigtuna Vatten & Renhållning AB': string;
                        'Sigtuna kommun': string;
                        'Simrishamns kommun': string;
                        'Sjöbo kommun': string;
                        'Skara Energi AB': string;
                        'Skaraborgsvatten KF': string;
                        'Skellefteå kommun': string;
                        'Skinnskattebergs kommun': string;
                        'Skurups kommun': string;
                        'Skåne Blekinge Vattentjänst AB, SBVT': string;
                        'Skövde kommun': string;
                        'Sollefteå kommun': string;
                        'Sollentuna Energi och Miljö AB': string;
                        'Sollentuna kommun': string;
                        'Solna Stad': string;
                        'Solna Vatten AB': string;
                        'Sorsele kommun': string;
                        'Staffanstorps kommun': string;
                        'Stenungsunds kommun': string;
                        'Stockholm Vatten och Avfall AB': string;
                        'Storfors kommun': string;
                        'Storumans kommun': string;
                        'Strängnäs Energi Vatten AB, SEVAB': string;
                        'Strängnäs kommun': string;
                        'Strömstads kommun': string;
                        'Strömsunds kommun': string;
                        'Sundbybergs Avfall och Vatten AB': string;
                        'Sunne kommun': string;
                        'Surahammars Kommunalteknik AB': string;
                        'Svedala kommun': string;
                        'Svenljunga kommun': string;
                        'Sydvatten AB': string;
                        'Säffle kommun': string;
                        'Säters kommun': string;
                        'Sävsjö kommun': string;
                        'Söderhamn Nära AB': string;
                        'Söderhamns kommun': string;
                        'Söderköpings kommun': string;
                        'Södertälje kommun': string;
                        'Sölvesborg Energi och Vatten AB': string;
                        'Sörmland Vatten o Avfall AB': string;
                        'Tanums kommun': string;
                        'Tekniska Verken i Kiruna AB': string;
                        'Tekniska Verken i Linköping AB': string;
                        'Telge Nät AB': string;
                        'Tibro kommun': string;
                        'Tidaholms kommun': string;
                        'Tierps Energi & Miljö AB': string;
                        'Tingsryds kommun': string;
                        'Tjörns kommun': string;
                        'Tomelilla kommun': string;
                        'Torsby kommun': string;
                        'Torsås kommun': string;
                        'Tranemo kommun': string;
                        'Tranås kommun': string;
                        'Trelleborgs kommun': string;
                        'Trollhättan Energi AB': string;
                        'Trosa kommun': string;
                        'Tyresö kommun': string;
                        'Täby kommun': string;
                        'Töreboda kommun': string;
                        'Ulricehamns Energi AB': string;
                        'Ulricehamns kommun': string;
                        'Upplands Bro kommun': string;
                        'Upplands Väsby kommun': string;
                        'Uppsala Vatten och Avfall AB': string;
                        'Uppsala kommun': string;
                        'Uppvidinge kommun': string;
                        'VA SYD': string;
                        'VA-Bolaget i Karlskoga AB': string;
                        'Vadstena kommun': string;
                        'Vaggeryds kommun': string;
                        'Vakin, Vatten- och Avfallskompetens i Norr AB': string;
                        'Valdemarsviks kommun': string;
                        'Vara kommun': string;
                        'Vatten & Avfall i Malung-Sälen AB, VAMAS': string;
                        'Vatten & Miljö i Väst AB, VIVAB': string;
                        'Vatten och Avlopp AB': string;
                        'Vellinge kommun': string;
                        'Vilhelmina kommun': string;
                        'Vimmerby Energi & Miljö AB': string;
                        'Vänersborgs kommun': string;
                        'Vännäs kommun': string;
                        'Värmdö kommun': string;
                        'Värnamo kommun': string;
                        'Västervik Miljö & Energi AB, VMEAB': string;
                        'Västerås stad': string;
                        'Västra Mälardalens Energi & Miljö AB': string;
                        'Västvatten AB': string;
                        'Växjö kommun': string;
                        'Vårgårda kommun': string;
                        'Wessman Barken Vatten och Återvinning AB': string;
                        'Ydre kommun': string;
                        'Ystads kommun': string;
                        'Älmhults kommun': string;
                        'Älvsbyns Energi AB': string;
                        'Älvsbyns kommun': string;
                        'Ängelholms kommun': string;
                        'Åmåls kommun': string;
                        'Ånge kommun': string;
                        'Åre kommun': string;
                        'Årjängs kommun': string;
                        'Åsele kommun': string;
                        'Åtvidabergs Vatten AB': string;
                        'Öckerö kommun': string;
                        'Ödeshögs kommun': string;
                        'Örebro kommun': string;
                        'Örkelljunga kommun': string;
                        'Örnsköldsviks kommun': string;
                        'Östersunds kommun': string;
                        'Östra Smålands Kommunalteknikförbund': string;
                        'Överkalix kommun': string;
                        'Övertorneå kommun': string;
                    };
                };
                FuseSize: {
                    '16': string;
                    '20': string;
                    '25': string;
                    '35': string;
                    '50': string;
                    '63': string;
                    '80': string;
                    '100': string;
                    '125': string;
                    '160': string;
                    '200': string;
                    '250': string;
                    '400': string;
                    '630': string;
                    '750': string;
                    '1000': string;
                    APARTMENT: string;
                    APARTMENT_16: string;
                    APARTMENT_20: string;
                    APARTMENT_25: string;
                    DOUBLE: string;
                    HOUSE: string;
                    L30: string;
                    L40: string;
                };
                Kind: {
                    BIOGAS: string;
                    BULKY_WASTE: string;
                    CLIMATE: string;
                    COLDWATER: string;
                    COMBUSTIBLE_WASTE: string;
                    COMPRESSED_AIR: string;
                    COOLING: string;
                    DEGREEDAYS: string;
                    DIESEL: string;
                    DURATION: string;
                    ELECTRICAL_WASTE: string;
                    ELECTRICITY: string;
                    EMISSION: string;
                    ENVIRONMENTAL_GUEST: string;
                    ETHANOL: string;
                    FILLERS: string;
                    FOOD_WASTE: string;
                    GAS: string;
                    GASOLINE: string;
                    GLASS_PACKAGING: string;
                    GUESTNIGHT: string;
                    HAZARDOUS_WASTE: string;
                    HEATING: string;
                    HOTWATER: string;
                    JANITORIAL_COST: string;
                    KPI: string;
                    LANDFILL: string;
                    MAINTENANCE_COST: string;
                    METAL_PACKAGING: string;
                    MIXED_WASTE: string;
                    NON_HAZARDOUS_WASTE: string;
                    NONE: string;
                    NUMBER: string;
                    OIL: string;
                    OUTVOICE: string;
                    PAPER_PACKAGING: string;
                    PELLETS: string;
                    PLASTIC_PACKAGING: string;
                    RECYCLING_PAPER: string;
                    RESIDUAL_WASTE: string;
                    SCRAP_METAL: string;
                    SERVING: string;
                    SOFT_PLASTIC: string;
                    TBD: string;
                    TRANSPORTATION: string;
                    TRANSPORTATION_SCOPE_1: string;
                    TRANSPORTATION_SCOPE_3: string;
                    VACANCY: string;
                    VISITOR: string;
                    WASTE_COST: string;
                    WATER: string;
                    WOOD: string;
                };
                Level: {
                    '5': string;
                    '6': string;
                    '7': string;
                    '10': string;
                    '457': string;
                    '1889': string;
                };
                Quantity: {
                    AIR_TEMPERATURE: string;
                    AMOUNT: string;
                    COMPOSTING__DIVERTED_OTHER: string;
                    COST_DKK: string;
                    COST_DKK_REAL: string;
                    COST_DKK_REAL_TOTAL: string;
                    COST_DKK_REAL_TOTAL_VAT: string;
                    COST_DKK_REAL_TOTAL_VAT_REDUCED: string;
                    COST_DKK_REAL_VAT: string;
                    COST_DKK_REAL_VAT_REDUCED: string;
                    COST_DKK_SIMUL_TOTAL: string;
                    COST_DKK_SIMUL_TOTAL_VAT: string;
                    COST_DKK_SIMUL_TOTAL_VAT_REDUCED: string;
                    COST_DKK_VAT: string;
                    COST_DKK_VAT_REDUCED: string;
                    COST_EUR: string;
                    COST_EUR_REAL: string;
                    COST_EUR_REAL_TOTAL: string;
                    COST_EUR_REAL_TOTAL_VAT: string;
                    COST_EUR_REAL_TOTAL_VAT_REDUCED: string;
                    COST_EUR_REAL_VAT: string;
                    COST_EUR_REAL_VAT_REDUCED: string;
                    COST_EUR_SIMUL_TOTAL: string;
                    COST_EUR_SIMUL_TOTAL_VAT: string;
                    COST_EUR_SIMUL_TOTAL_VAT_REDUCED: string;
                    COST_EUR_VAT: string;
                    COST_EUR_VAT_REDUCED: string;
                    COST_NOK: string;
                    COST_NOK_REAL: string;
                    COST_NOK_REAL_TOTAL: string;
                    COST_NOK_REAL_TOTAL_VAT: string;
                    COST_NOK_REAL_TOTAL_VAT_REDUCED: string;
                    COST_NOK_REAL_VAT: string;
                    COST_NOK_REAL_VAT_REDUCED: string;
                    COST_NOK_SIMUL_TOTAL: string;
                    COST_NOK_SIMUL_TOTAL_VAT: string;
                    COST_NOK_SIMUL_TOTAL_VAT_REDUCED: string;
                    COST_NOK_VAT: string;
                    COST_NOK_VAT_REDUCED: string;
                    COST_PLN: string;
                    COST_PLN_REAL: string;
                    COST_PLN_REAL_TOTAL: string;
                    COST_PLN_REAL_TOTAL_VAT: string;
                    COST_PLN_REAL_TOTAL_VAT_REDUCED: string;
                    COST_PLN_REAL_VAT: string;
                    COST_PLN_REAL_VAT_REDUCED: string;
                    COST_PLN_SIMUL_TOTAL: string;
                    COST_PLN_SIMUL_TOTAL_VAT: string;
                    COST_PLN_SIMUL_TOTAL_VAT_REDUCED: string;
                    COST_PLN_VAT: string;
                    COST_PLN_VAT_REDUCED: string;
                    COST_SEK: string;
                    COST_SEK_REAL: string;
                    COST_SEK_REAL_TOTAL: string;
                    COST_SEK_REAL_TOTAL_VAT: string;
                    COST_SEK_REAL_TOTAL_VAT_REDUCED: string;
                    COST_SEK_REAL_VAT: string;
                    COST_SEK_REAL_VAT_REDUCED: string;
                    COST_SEK_SIMUL_TOTAL: string;
                    COST_SEK_SIMUL_TOTAL_VAT: string;
                    COST_SEK_SIMUL_TOTAL_VAT_REDUCED: string;
                    COST_SEK_VAT: string;
                    COST_SEK_VAT_REDUCED: string;
                    CURRENT: string;
                    DATA_QUALITY: string;
                    DEEP_WELL_INJECTION__DIVERTED_OTHER: string;
                    DELTA_TEMPERATURE: string;
                    DISTANCE: string;
                    DISTANCE_PKM: string;
                    DURATION: string;
                    ENERGY: string;
                    ENERGY_DDADJUSTED: string;
                    ENERGY_DDN_CDD: string;
                    ENERGY_DDN_HDD: string;
                    ENERGY_NONRENEWABLE: string;
                    ENERGY_REACTIVE: string;
                    ENERGY_RENEWABLE: string;
                    ENERGY_SMHI_EI: string;
                    ENERGY_SMHI_HDD: string;
                    ENV_CO2: string;
                    ENV_CO2_COMP: string;
                    ENV_CO2_REAL: string;
                    ENV_CO2_SIMUL_LOCATION: string;
                    ENV_CO2_SIMUL_MARKET: string;
                    FLOW: string;
                    FORWARD_TEMPERATURE: string;
                    HUMIDITY: string;
                    INCINERATION__INCINERATION: string;
                    LANDFILL__LANDFILL: string;
                    NONE: string;
                    'ON-SITE_STORAGE__DIVERTED_OTHER': string;
                    OTHER__OTHER: string;
                    PERCENT: string;
                    POWER: string;
                    POWER_PHASE_ONE: string;
                    POWER_PHASE_THREE: string;
                    POWER_PHASE_TWO: string;
                    RECOVERY__DIVERTED_TO_ENERGY: string;
                    RECYCLING__DIVERTED_RECYCLING: string;
                    RETURN_TEMPERATURE: string;
                    REUSE__DIVERTED_OTHER: string;
                    VOLTAGE: string;
                    VOLUME: string;
                    WEIGHT: string;
                    WIND_SPEED: string;
                };
                ReadingSystem: {
                    Brunata: string;
                    'EL System': string;
                    EcoGuard: string;
                    Elvaco: string;
                    Infometric: string;
                    Kamstrup: string;
                    Megacon: string;
                    Other: string;
                    PiiGAB: string;
                    'Schneider Electric': string;
                    Siemens: string;
                    Smartvatten: string;
                    StruxureWare: string;
                    'StruxureWare Homepal': string;
                    Styrportalen: string;
                    TalkPool: string;
                    Techum: string;
                    Vastint: string;
                    Vätterhem: string;
                    'Web Factory': string;
                    'Web Port': string;
                };
                Resolution: {
                    day: string;
                    hour: string;
                    month: string;
                };
                Status: {
                    contractOnOtherCustomer: string;
                    credentials: string;
                    distributorContacted: string;
                    distributorIssue: string;
                    distributorNoData: string;
                    meterTerminated: string;
                    noStatus: string;
                };
                TradingCompany: {
                    COLDWATER: {
                        'Akademiska hus': string;
                    };
                    COOLING: {
                        'Akademiska hus': string;
                    };
                    ELECTRICITY: {
                        '7H Kraft': string;
                        'AB Edsbyns Elverk': string;
                        'Affärsverken Energi Karlskrona AB': string;
                        'Akademiska hus': string;
                        'Alingsås Energi AB': string;
                        'Alvesta Energi': string;
                        'Bengtsfors Energi Handel AB': string;
                        'Billinge Energi AB': string;
                        'Bixia AB': string;
                        'Björklinge Energi Försäljning AB': string;
                        'Bodens Energi AB': string;
                        'Boo Energi': string;
                        'Borås Elhandel AB': string;
                        'Dala Kraft AB': string;
                        'Eksjö Energi ELIT AB': string;
                        'Elhandel i Vetlanda AB': string;
                        'Elverket Vallentuna El AB': string;
                        'Energibolaget i Sverige': string;
                        'Eskilstuna Energi och Miljö': string;
                        'Falkenberg Energi': string;
                        Fortum: string;
                        'Fyrfasen Energi AB': string;
                        'Fyrstad Kraft': string;
                        'Gislaved Energiring AB': string;
                        'Gotlands Elförsäljning AB': string;
                        'Grästorp Energi AB': string;
                        'Gävle Energi AB': string;
                        'Göta energi ab': string;
                        'Habo Energi AB': string;
                        'Halmstads Energi och Miljö AB': string;
                        'Herrljunga Elkraft': string;
                        'Hjo Energi Elhandel AB': string;
                        'Hjärtums Energi AB': string;
                        'Härryda Energi Elhandel AB': string;
                        'Ingetextra.se': string;
                        'Jukkasjärvi Energi AB': string;
                        'Jämtkraft AB': string;
                        'Jönköping Energi AB': string;
                        'Kalmar Energi Försäljning AB': string;
                        'Karlsborgs Energi Försäljnings AB': string;
                        'Karlshamn Energi Elförsäljning AB': string;
                        'Karlstads Energi AB': string;
                        'Kinect Energy Sweden AB': string;
                        'Kraft & Kultur i Sverige AB': string;
                        Kraftaktörerna: string;
                        'Kreab Försäljning': string;
                        'Kvänum Energi AB': string;
                        'Linde Energi Försäljning AB': string;
                        'Ljusdal Energi Försäljning AB': string;
                        'Luleå Energi AB': string;
                        'Lunds Energi Försäljning': string;
                        'Mellanskånes Kraft AB': string;
                        'Min-El ebs AB': string;
                        'Mälarenergi AB': string;
                        'Mölndal Energi AB': string;
                        'Norrtälje Energi Försäljnings AB': string;
                        'Nossebro Energi': string;
                        'Nynäshamn Energi Försäljning AB': string;
                        'Näckåns Energi AB': string;
                        OKQ8: string;
                        'Oskarshamn Energi AB': string;
                        'PiteEnergi Handel AB': string;
                        'Ringsjö Energi Försäljning': string;
                        'Rödeby Energi AB': string;
                        'SEVAB Energiförsäljning AB': string;
                        'Sala-Heby Energi AB': string;
                        'Sandviken Energi AB': string;
                        'Sjogerstads Energi AB': string;
                        'Sjöbo Energi AB': string;
                        'Skellefteå Kraft AB': string;
                        'Sollentuna Energi Handel AB': string;
                        'Storuman Energi AB': string;
                        'Sundsvall Energi AB': string;
                        'Telge Energi AB': string;
                        'Tibro Energi Försäljning AB': string;
                        'Tranås Energi AB': string;
                        'Trelleborgs Energiförsäljning AB': string;
                        'Umeå Energi Elhandel AB': string;
                        'Uppsala El': string;
                        'Vaggeryds Energi': string;
                        'Varberg Energimarknad AB': string;
                        'Varbergsortens Elförsäljning AB': string;
                        'Vattenfall AB': string;
                        'Värnamo Energi AB': string;
                        'Västerbergslagens Elförsäljning AB': string;
                        'Wallenstam Energi': string;
                        'Yello Strom': string;
                        Öresundskraft: string;
                        'Österlens Kraft Försäljnings AB': string;
                        'Övik Energi AB': string;
                    };
                    HEATING: {
                        'Akademiska hus': string;
                    };
                    HOTWATER: {
                        'Akademiska hus': string;
                    };
                };
                WaterMeterSize: {
                    DIAMETER_20mm: string;
                    DIAMETER_25mm: string;
                    DIAMETER_40mm: string;
                    DIAMETER_50mm: string;
                    DIAMETER_80mm: string;
                    DIAMETER_100mm: string;
                    DIAMETER_200mm_SPRINKLER: string;
                };
            };
            Premises: {
                Country: {
                    CZ: string;
                    DE: string;
                    DK: string;
                    FI: string;
                    IS: string;
                    LT: string;
                    LV: string;
                    NL: string;
                    NO: string;
                    PL: string;
                    SE: string;
                    SJ: string;
                };
            };
            PriceModel: {
                Currency: {
                    DKK: string;
                    EUR: string;
                    NOK: string;
                    NONE: string;
                    PLN: string;
                    SEK: string;
                };
                Distributor: {
                    COLDWATER: {
                        'AB Borlänge Energi': string;
                        'AB Boxholmsteknik': string;
                        'Aarhus Vand A/S': string;
                        'Administrationsservice Fyn A/S': string;
                        'Ale kommun': string;
                        'Alingsås kommun': string;
                        'Alvesta kommun': string;
                        'Aneby Miljö & Vatten AB': string;
                        'Arboga kommun': string;
                        'Arjeplogs kommun': string;
                        'Arvidsjaurs kommun': string;
                        'Arvika Teknik AB': string;
                        'Askersunds kommun': string;
                        'Avesta VA och Avfall AB': string;
                        'Avesta kommun': string;
                        'Bengtsfors kommun': string;
                        'Bergs kommun': string;
                        'Bjurholms kommun': string;
                        'BlueKolding A/S': string;
                        'Bodens kommun': string;
                        'Bollebygds kommun': string;
                        'Borgholms Energi AB': string;
                        'Borgholms kommun': string;
                        'Borlänge kommun': string;
                        'Borås Energi och Miljö AB': string;
                        'Borås stad': string;
                        'Botkyrka kommun': string;
                        'Bramdrupdam Vandværk': string;
                        'Bräcke kommun': string;
                        'Dala Vatten och Avfall AB': string;
                        'Dals-Eds kommun': string;
                        'Danderyds kommun': string;
                        'Degerfors kommun': string;
                        'Dorotea kommun': string;
                        'Eda kommun': string;
                        'Eidsiva Energi AS': string;
                        'Ekerö kommun': string;
                        'Eksjö Energi AB': string;
                        'Emmaboda Energi & Miljö AB': string;
                        'Enegia Market Services Oy': string;
                        'Enköpings kommun': string;
                        'Eskilstuna Energi & Miljö AB': string;
                        'Essunga kommun': string;
                        'Falköpings kommun': string;
                        'Falu Energi & Vatten AB': string;
                        'Filipstads kommun': string;
                        'Finspångs Tekniska Verk AB': string;
                        'Fors A/S': string;
                        'Forshaga kommun': string;
                        'Gislaveds kommun': string;
                        'Glostrup Forsyning': string;
                        'Gnesta kommun': string;
                        'Gnosjö kommun': string;
                        'Grums kommun': string;
                        'Gryaab AB': string;
                        'Grästorps kommun': string;
                        'Gullspångs kommun': string;
                        'Gällivare kommun': string;
                        'Gästrike Vatten AB': string;
                        'Gävle kommun Miljö och hälsa': string;
                        'Göteborgs Stad Kretslopp och vatten': string;
                        'Göteborgsregionens kommunalförbund': string;
                        'Götene Vatten & Värme AB': string;
                        'Götene kommun': string;
                        'Habo kommun': string;
                        'Hagfors kommun': string;
                        'Hallsbergs kommun': string;
                        'Hallstahammars kommun': string;
                        'Halmstads kommun': string;
                        'Hammarö kommun': string;
                        'Haninge kommun': string;
                        'Haparanda Stad': string;
                        'Heby kommun': string;
                        'Hedemora Energi AB': string;
                        'Hedemora kommun': string;
                        'Helsinge Vatten AB': string;
                        'Herrljunga Vatten AB': string;
                        'Hjo kommun': string;
                        'Hudiksvalls kommun': string;
                        'Hylte kommun': string;
                        'Härjedalens kommun': string;
                        'Härnösand Energi & Miljö AB': string;
                        'Härryda kommun': string;
                        'Hässleholms Vatten AB': string;
                        'Håbo kommun': string;
                        'Höganäs kommun': string;
                        'Jokkmokks kommun': string;
                        'Järfälla kommun': string;
                        'Jönköpings kommun': string;
                        'Kalix kommun': string;
                        'Kalmar Vatten AB': string;
                        'Karlsborgs kommun': string;
                        'Karlshamns kommun': string;
                        'Karlskoga kommun': string;
                        'Karlskrona kommun': string;
                        'Karlstads kommun': string;
                        'Kils kommun': string;
                        'Kinda kommun': string;
                        'Kiruna kommun': string;
                        'Klippans kommun': string;
                        'Kramfors kommun': string;
                        'Kristianstads kommun': string;
                        'Kristinehamns kommun': string;
                        'Krokoms kommun': string;
                        'Kumla kommun': string;
                        'Kungsbacka kommun': string;
                        'Kungsörs Vatten AB': string;
                        'Kungälvs kommun': string;
                        Käppalaförbundet: string;
                        'Kävlinge kommun': string;
                        'LEVA i Lysekil AB': string;
                        'Laholmsbukten VA': string;
                        'Laxå Vatten AB': string;
                        'Lekebergs kommun': string;
                        'Lerums kommun': string;
                        'Lessebo kommun': string;
                        'Lidingö Stad': string;
                        'Lidköpings kommun': string;
                        'Lilla Edets kommun': string;
                        'Linköpings kommun': string;
                        'Ljungby kommun': string;
                        'Ljusdals Vatten AB': string;
                        'Lomma kommun': string;
                        'Luleå kommun': string;
                        'Lycksele Avfall och Vatten AB': string;
                        'Malå kommun': string;
                        'Mariestads kommun': string;
                        'Markaryds kommun': string;
                        'Marks kommun': string;
                        'Melleruds kommun': string;
                        'Miljö och Vatten i Örnsköldsvik AB': string;
                        'MittSverige Vatten & Avfall AB': string;
                        'Mittskåne Vatten': string;
                        'Mjölby kommun': string;
                        'Mora Vatten AB': string;
                        'Motala kommun': string;
                        'Mullsjö Energi & Miljö AB': string;
                        'Mullsjö kommun': string;
                        'Munkfors kommun': string;
                        'Mölndals stad': string;
                        'Mönsterås kommun': string;
                        'Mörbylånga kommun': string;
                        'NSVA Nordvästra Skånes': string;
                        NVK: string;
                        'Nacka Vatten och Avfall AB': string;
                        'Nacka kommun': string;
                        'Njudung Energi Vetlanda AB': string;
                        'Nordmalings kommun': string;
                        'Norra Dalarna Vatten och Avfall AB, NODAVA': string;
                        'Norra Västmanlands': string;
                        'Norra Västmanlands Kommunalteknikförbund': string;
                        'Norrköping Vatten och Avfall AB': string;
                        'Norrköpings kommun': string;
                        'Norrtälje kommun': string;
                        Norrvatten: string;
                        'Norsjö kommun': string;
                        'Nybro Elnät AB': string;
                        'Nykvarns kommun': string;
                        'Nyköping-Oxelösund': string;
                        'Nyköpings kommun Nyköping Vatten': string;
                        'Nynäshamns kommun': string;
                        'Nässjö Affärsverk AB': string;
                        'Nässjö kommun': string;
                        'Orust kommun': string;
                        'Oskarshamns kommun': string;
                        Other: string;
                        'Oxelö Energi AB': string;
                        'Pajala kommun': string;
                        'Partille kommun': string;
                        'Perstorps kommun': string;
                        'Piteå Renhållning & Vatten AB': string;
                        'Piteå kommun': string;
                        'Ragunda kommun': string;
                        'Region Gotland': string;
                        'Robertsfors kommun': string;
                        'Ronneby Miljö & Teknik AB': string;
                        'Roslagsvatten AB': string;
                        SYVAB: string;
                        'Sala kommun': string;
                        'Salems kommun': string;
                        'Samhällsbyggnad Bergslagen': string;
                        'Sandviken Energi Vatten AB': string;
                        'Sandvikens kommun': string;
                        'Sigtuna Vatten & Renhållning AB': string;
                        'Sigtuna kommun': string;
                        'Simrishamns kommun': string;
                        'Sjöbo kommun': string;
                        'Skara Energi AB': string;
                        'Skaraborgsvatten KF': string;
                        'Skellefteå kommun': string;
                        'Skinnskattebergs kommun': string;
                        'Skurups kommun': string;
                        'Skåne Blekinge Vattentjänst AB, SBVT': string;
                        'Skövde kommun': string;
                        'Sollefteå kommun': string;
                        'Sollentuna Energi och Miljö AB': string;
                        'Sollentuna kommun': string;
                        'Solna Stad': string;
                        'Solna Vatten AB': string;
                        'Sorsele kommun': string;
                        'Staffanstorps kommun': string;
                        'Stenungsunds kommun': string;
                        'Stockholm Vatten och Avfall AB': string;
                        'Storfors kommun': string;
                        'Storumans kommun': string;
                        'Strängnäs Energi Vatten AB, SEVAB': string;
                        'Strängnäs kommun': string;
                        'Strömstads kommun': string;
                        'Strömsunds kommun': string;
                        'Sundbybergs Avfall och Vatten AB': string;
                        'Sunne kommun': string;
                        'Surahammars Kommunalteknik AB': string;
                        'Svedala kommun': string;
                        'Svenljunga kommun': string;
                        'Sydvatten AB': string;
                        'Säffle kommun': string;
                        'Säters kommun': string;
                        'Sävsjö kommun': string;
                        'Söderhamn Nära AB': string;
                        'Söderhamns kommun': string;
                        'Söderköpings kommun': string;
                        'Södertälje kommun': string;
                        'Sölvesborg Energi och Vatten AB': string;
                        'Sörmland Vatten o Avfall AB': string;
                        'Tanums kommun': string;
                        'Tekniska Verken i Kiruna AB': string;
                        'Tekniska Verken i Linköping AB': string;
                        'Telge Nät AB': string;
                        'Tibro kommun': string;
                        'Tidaholms kommun': string;
                        'Tierps Energi & Miljö AB': string;
                        'Tingsryds kommun': string;
                        'Tjörns kommun': string;
                        'Tomelilla kommun': string;
                        'Torsby kommun': string;
                        'Torsås kommun': string;
                        'Tranemo kommun': string;
                        'Tranås kommun': string;
                        'Trelleborgs kommun': string;
                        'Trollhättan Energi AB': string;
                        'Trosa kommun': string;
                        'Tyresö kommun': string;
                        'Täby kommun': string;
                        'Töreboda kommun': string;
                        'Ulricehamns Energi AB': string;
                        'Ulricehamns kommun': string;
                        'Upplands Bro kommun': string;
                        'Upplands Väsby kommun': string;
                        'Uppsala Vatten och Avfall AB': string;
                        'Uppsala kommun': string;
                        'Uppvidinge kommun': string;
                        'VA SYD': string;
                        'VA-Bolaget i Karlskoga AB': string;
                        'Vadstena kommun': string;
                        'Vaggeryds kommun': string;
                        'Vakin, Vatten- och Avfallskompetens i Norr AB': string;
                        'Valdemarsviks kommun': string;
                        'Vara kommun': string;
                        'Vatten & Avfall i Malung-Sälen AB, VAMAS': string;
                        'Vatten & Miljö i Väst AB, VIVAB': string;
                        'Vatten och Avlopp AB': string;
                        'Vellinge kommun': string;
                        'Vilhelmina kommun': string;
                        'Vimmerby Energi & Miljö AB': string;
                        'Vänersborgs kommun': string;
                        'Vännäs kommun': string;
                        'Värmdö kommun': string;
                        'Värnamo kommun': string;
                        'Västervik Miljö & Energi AB, VMEAB': string;
                        'Västerås stad': string;
                        'Västra Mälardalens Energi & Miljö AB': string;
                        'Västvatten AB': string;
                        'Växjö kommun': string;
                        'Vårgårda kommun': string;
                        'Wessman Barken Vatten och Återvinning AB': string;
                        'Ydre kommun': string;
                        'Ystads kommun': string;
                        'Älmhults kommun': string;
                        'Älvsbyns Energi AB': string;
                        'Älvsbyns kommun': string;
                        'Ängelholms kommun': string;
                        'Åmåls kommun': string;
                        'Ånge kommun': string;
                        'Åre kommun': string;
                        'Årjängs kommun': string;
                        'Åsele kommun': string;
                        'Åtvidabergs Vatten AB': string;
                        'Öckerö kommun': string;
                        'Ödeshögs kommun': string;
                        'Örebro kommun': string;
                        'Örkelljunga kommun': string;
                        'Örnsköldsviks kommun': string;
                        'Östersunds kommun': string;
                        'Östra Smålands Kommunalteknikförbund': string;
                        'Överkalix kommun': string;
                        'Övertorneå kommun': string;
                    };
                    COOLING: {
                        'Adven Energilösningar AB': string;
                        'Affärsverken Karlskrona AB': string;
                        'Alingsås Energi Nät AB': string;
                        'Alvesta Energi AB': string;
                        'Aneby Miljö & Vatten AB': string;
                        'Arboga Energi AB': string;
                        'Arvidsjaurs Energi AB': string;
                        'Arvika Fjärrvärme AB': string;
                        BTEA: string;
                        'Bengtsfors Energi': string;
                        Bionär: string;
                        'Bodens Energi AB': string;
                        'Bollnäs Energi AB': string;
                        'Borgholm Energi AB': string;
                        'Borlänge Energi AB': string;
                        'Borås Energi och Miljö AB': string;
                        'Bromölla fjärrvärme AB': string;
                        'C4 Energi AB': string;
                        'Dala Energi': string;
                        'Degerfors Energi AB': string;
                        'EDA Energi AB': string;
                        'ENA Energi AB': string;
                        'EON Värme Sverige': string;
                        'Eidsiva Energi AS': string;
                        'Eksjö Energi AB': string;
                        'Elektra Värme AB': string;
                        'Emmaboda Energi AB': string;
                        'Enegia Market Services Oy': string;
                        'Enycon AB': string;
                        'Eskilstuna Energi & Miljö AB': string;
                        'Falbygdens Energi AB': string;
                        'Falkenberg Energi AB': string;
                        'Falu Energi & Vatten AB': string;
                        'Farmarenergi i Ed AB': string;
                        'Finspångs Tekniska Verk AB': string;
                        'Fjärrvärme i Osby AB': string;
                        'Forshaga Energi AB': string;
                        'Gislaved Energi': string;
                        'Gotlands Energi AB': string;
                        'Gällivare Värmeverk AB': string;
                        'Gävle Energi AB': string;
                        'Göteborg Energi AB': string;
                        'Götene Vatten & Värme AB': string;
                        'Habo Energi AB': string;
                        'Hagfors Energi AB': string;
                        'Halmstads Energi och Miljö AB': string;
                        'Hammarö Energi AB': string;
                        'Hardanger Energi AS': string;
                        'Hedemora Energi AB': string;
                        'Helen Oy': string;
                        'Herrljunga Elektriska AB': string;
                        'Hjo Energi AB': string;
                        'Härnösand Energi & Miljö AB': string;
                        'Hässleholm Miljö AB': string;
                        'Höganäs Fjärrvärme AB': string;
                        'Jokkmokks Värmeverk AB': string;
                        'Jämtkraft AB': string;
                        'Jämtlandsvärme AB': string;
                        'Jönköping Energi AB': string;
                        'Kalmar Energi Värme AB': string;
                        'Karlsborg Energi AB': string;
                        'Karlshamn Energi AB': string;
                        'Karlskoga Energi & Miljö AB': string;
                        'Karlstads Energi AB': string;
                        'Kils Energi AB': string;
                        'Kraftringen Energi AB': string;
                        'Kristinehamns Fjärrvärme AB': string;
                        'Kungälv Energi AB': string;
                        'LEVA i Lysekil AB': string;
                        'Landskrona Energi AB': string;
                        'Lantmännen Agrovärme AB': string;
                        'LaxåVärme Aktiebolag': string;
                        'Lekeberg Bioenergi AB': string;
                        'Lerum Fjärrvärme AB': string;
                        'Lessebo fjärrvärme AB': string;
                        'Lidköpings Värmeverk AB': string;
                        'Lilla Edets Fjärrvärme AB': string;
                        'Linde Energi AB': string;
                        'Ljungby Energi AB': string;
                        'Ljusdal Energi AB': string;
                        'Luleå Energi AB': string;
                        'Lunds Energikoncern AB': string;
                        'Malung-Sälenskommun Värmeverket': string;
                        'Mariestad-Töreboda Energi AB': string;
                        'Marks Värme AB': string;
                        'Mjölby-Svartådalen Energi AB': string;
                        'Mullsjö Energi & MIljö AB': string;
                        'Munkfors Värmeverk AB': string;
                        'Mälarenergi AB': string;
                        'Mölndal Energi AB': string;
                        'Mörbylånga Kommun': string;
                        'Nevel AB': string;
                        'Njudung Energi Vetlanda AB': string;
                        'Norrenergi AB': string;
                        'Norrtälje Energi AB': string;
                        'Nybro Energi AB': string;
                        'Nässjö Affärsverk AB': string;
                        'Olotröms Kraft AB': string;
                        'Oskarshamn Energi AB': string;
                        Other: string;
                        'Oxelö Energi AB': string;
                        'Pajala Värmeverk AB': string;
                        'Peab Energi AB': string;
                        'Perstorps Fjärrvärme AB': string;
                        'Pite Energi AB': string;
                        'Ragunda Energi Teknik AB': string;
                        'Rindi Energi AB': string;
                        'Ronneby Miljö och Teknik AB': string;
                        'Rättviks Teknik AB': string;
                        'Sala-Heby Energi AB': string;
                        'Sandviken Energi AB': string;
                        'Skara Energi AB': string;
                        'Skellefteå Kraft AB': string;
                        'Skånska Energi Värme & Kyla AB': string;
                        'Skövde Värmeverk AB': string;
                        'Smedjebacken Energi AB': string;
                        'Sollentuna Energi AB': string;
                        'Solör Bioenergi Fjärrvärme AB': string;
                        'Sorsele kommun': string;
                        'Statkraft Varme AS': string;
                        'Statkraft Värme AB': string;
                        'Stenungsunds Energi och Miljö AB': string;
                        'Stockholm Exergi AB': string;
                        'Strängnäs Energi AB': string;
                        'Sundsvall Energi AB': string;
                        'Svenljunga Energi AB': string;
                        'Sävsjö Energi AB': string;
                        'Söderhamn Nära AB': string;
                        'Södertörns Fjärrvärme AB': string;
                        'Sölvesborgs Energi och Vatten AB': string;
                        'Tekniska Verken i Kiruna AB': string;
                        'Tekniska Verken i Linköping AB': string;
                        'Telge Nät AB': string;
                        'Tidaholms Energi AB': string;
                        'Tierps Fjärrvärme AB': string;
                        'Torsby kommun': string;
                        'Torsås Fjärrvärme AB': string;
                        'Tranås Energi AB': string;
                        'Trelleborgs Fjärrvärme AB': string;
                        'Trollhättan Energi AB': string;
                        'Tussa Energi AS': string;
                        'Uddevalla Energi AB': string;
                        'Ulricehamns Energi AB': string;
                        'Umeå Energi AB': string;
                        'Vaggeryds Energi AB': string;
                        'Vantaan Energia Oy': string;
                        'Vara Värme AB': string;
                        'Varberg Energi AB': string;
                        'Vasa Holding Värme': string;
                        'Vattenfall AB': string;
                        'Vimmerby Energi AB': string;
                        'VänerEnergi AB': string;
                        'Värmevärden AB': string;
                        'Värnamo Energi AB': string;
                        'Västerbergslagens Energi AB': string;
                        'Västervik Miljö & Energi AB': string;
                        'Västra Mälardalens Energi & Miljö AB': string;
                        'Växjö Energi AB': string;
                        'Ystad Energi AB': string;
                        'Älvsbyns Fjärrvärme': string;
                        'Ånge Energi AB': string;
                        'Åsele Energi AB': string;
                        'Öresundskraft AB': string;
                        'Örkelljunga Fjärrvärmeverk AB': string;
                        'Österlens Kraft AB': string;
                        'Överkalix kommun': string;
                        'Övik Energi AB': string;
                    };
                    ELECTRICITY: {
                        'Affärsverken Elnät i Karlskrona': string;
                        'Ale Elförening ek för': string;
                        'Alingsås Energi Nät AB': string;
                        'Almnäs Bruk AB': string;
                        'Alvesta Elnät AB': string;
                        'Arvika Teknik AB': string;
                        'BKK Nett AS': string;
                        'Baltic Cable AB': string;
                        'Bengtsfors Energi Nät AB': string;
                        'Bergs Tingslags Elektriska AB': string;
                        'BillerudKorsnäs Skog & Industri AB': string;
                        'Bjäre Kraft ek för': string;
                        'Bjärke Energi ek för': string;
                        'Bliekevare Nät AB': string;
                        'Blåsjön Nät AB': string;
                        'Boda Nät ek för': string;
                        'Bodens Energi Nät AB': string;
                        'Boo Energi ek för': string;
                        'Borgholm Energi Elnät AB': string;
                        'Borlänge Energi Elnät AB': string;
                        'Borås Energi Nät AB': string;
                        'Brittedals Elnät ek för': string;
                        'Brobacken Nät AB': string;
                        'Bromölla Energi och Vatten AB': string;
                        'C4 Elnät AB': string;
                        'Carlfors Bruk KB': string;
                        'Caruna Oy': string;
                        'Dala Elnät AB': string;
                        'Dala Energi Elnät AB': string;
                        'Degerfors Energi AB': string;
                        'Dragaliden Net AB': string;
                        'EON Elnät Stockholm AB': string;
                        'EON Elnät Sverige AB': string;
                        'Eksjö Elnät AB': string;
                        'Elektra Nät AB': string;
                        'Elkraft AS': string;
                        'Elkraft Sverige AB': string;
                        'Ellevio AB': string;
                        'Elverket Vallentuna Elnät AB': string;
                        'Elvia A/S': string;
                        'Emmaboda Elnät AB': string;
                        'Enegia Market Services Oy': string;
                        'Energijos Skirstymo Operatorius AB': string;
                        'Energinet Eltransmission A/S': string;
                        'Envikens Elnät AB': string;
                        'Eskilstuna Energi & Miljö Elnät': string;
                        Ewii: string;
                        'Falbygdens Energi Nät AB': string;
                        'Falkenberg Energi AB': string;
                        'Falu Elnät AB': string;
                        'Filipstad Energinät AB': string;
                        'Fredrikstad Energinett AS': string;
                        'Gabrielsberget Net AB': string;
                        'Gislaved Energi Elnät AB': string;
                        'Gotlands Elnät AB': string;
                        'Grästorp Energi ek för': string;
                        'Gävle Energi AB': string;
                        'Göteborg Energi Nät AB': string;
                        'Götene Elförening ek för': string;
                        'Habo Kraft AB': string;
                        'Hallstaviks Elverk ek för': string;
                        'Halmstads Energi och Miljö Nät AB': string;
                        'Hamra Besparingsskog': string;
                        'Hardanger Energi Nett AS': string;
                        'Havsnäs Vindkraft Elnät AB': string;
                        'Hedemora Energi AB': string;
                        'Helen Sähköverkko Oy': string;
                        'Herrljunga Elektriska AB': string;
                        'Hjo Energi AB': string;
                        'Hjärtums Elförening ek för': string;
                        'Hofors Elverk AB': string;
                        'Holmen Energi Elnät AB': string;
                        'Härjeåns Nät AB': string;
                        'Härnösand Elnät AB': string;
                        'Härryda Energi AB': string;
                        'Hålogaland Kraft AS': string;
                        'Höganäs Energi AB': string;
                        'Jukkasjärvi Sockens Belysningsfö': string;
                        'Jämtkraft Elnät AB': string;
                        'Jönköping Energi Nät AB': string;
                        'Kalmar Energi Elnät AB': string;
                        'Karlsborgs Energi AB': string;
                        'Karlshamn Energi AB': string;
                        'Karlskoga Elnät AB': string;
                        'Karlstads El- och Stadsnät AB': string;
                        'Kraftringen Nät AB': string;
                        'Kristinehamns Elnät AB': string;
                        'Kungälv Energi AB': string;
                        'Kvarnforsen Nät AB': string;
                        'Kvänumbygdens Energi ek för': string;
                        'LEVA i Lysekil AB': string;
                        'LKAB Nät AB': string;
                        'Landskrona Energi AB': string;
                        'Lappeenrannan Energiaverkot Oy': string;
                        'Lerum Energi AB': string;
                        'Lidköping Elnät': string;
                        'Linde Energi AB': string;
                        'Ljungby Energinät AB': string;
                        'Ljusdal Elnät AB': string;
                        'Luleå Energi Elnät AB': string;
                        'Lyse Elnett AS': string;
                        'Malungs Elnät AB': string;
                        'Mellersta Skånes Kraft ek för': string;
                        'Mjölby Kraftnät AB': string;
                        'Mullbergs Elnät AB': string;
                        'Mälarenergi Elnät AB': string;
                        'Mölndal Energi Nät AB': string;
                        'Mørenett AS': string;
                        'Nacka Energi AB': string;
                        'Njudung Energi Sävsjö AB': string;
                        'Njudung Vetlanda Elnät AB': string;
                        'Nordmöre Energiverk AS': string;
                        'Norrtälje Energi AB': string;
                        'Nossebroortens Energi ek för': string;
                        'Nybro Elnät AB': string;
                        'Nynäshamn Energi AB': string;
                        'Näckåns Elnät AB': string;
                        'Nässjö Affärsverk Elnät AB': string;
                        'Olofströms Kraft Nät AB': string;
                        'Olseröds Elektriska Distribution': string;
                        'Oppdal Everk AS': string;
                        'Oskarshamn Energi Nät AB': string;
                        Other: string;
                        'Ovako Sweden AB': string;
                        'Oxelö Energi AB': string;
                        'Partille Energi Nät AB': string;
                        'Pite Energi AB': string;
                        'Ronneby Miljö o Teknik AB': string;
                        'Röbergsfjället Nät AB': string;
                        'Rödeby Elverk ek för': string;
                        'SEVAB Nät AB': string;
                        'Sala-Heby Energi Elnät AB': string;
                        'Sandhult-Sandareds Elektr ek för': string;
                        'Sandviken Energi Elnät AB': string;
                        'Sidensjö Vindkraft Elnät AB': string;
                        'Sjisjka Nät AB': string;
                        'Sjogerstads Elektriska Distributionsförening ek för': string;
                        'Sjöbo Elnät AB': string;
                        'Skara Energi AB': string;
                        'Skellefteå Kraft Elnät AB': string;
                        'Skurups Elverk AB': string;
                        'Skyllbergs Bruks AB': string;
                        'Skånska Energi Nät AB': string;
                        'SkövdeNät AB': string;
                        'Smedjebacken Energi Nät AB': string;
                        'Sollentuna Energi och Miljö AB': string;
                        'Staffanstorps Energi AB': string;
                        'Statkraft Energi AS': string;
                        'Stensjön Kraft AB': string;
                        'Sturefors Eldistribution AB': string;
                        'Sundsvall Elnät AB': string;
                        'Swedavia Energi AB': string;
                        'Söderhamn Elnät AB': string;
                        'Södra Hallands Kraft ek för': string;
                        'Sölvesborgs Energi och Vatten AB': string;
                        'Sörbylunds Elnät HB': string;
                        'Tampereen Sähköverkko Oy': string;
                        'Tekniska Verken Katrineholm Nät AB': string;
                        'Tekniska Verken Linköping Nät AB': string;
                        'Telge Nät AB': string;
                        'Tibro Elnät AB': string;
                        'Tidaholm Elnät AB': string;
                        'Tranås Energi Elnät AB': string;
                        'Trelleborg Energi Kommunal Teknik': string;
                        'Trollhättan Energi Elnät AB': string;
                        'Troms Kraft Nett AS': string;
                        'TrønderEnergi Nett AS': string;
                        'Turku Energia Sähköverkot Oy': string;
                        'Tussa Kraft AS': string;
                        'Töre Energi ek för': string;
                        'Uddevalla Energi Elnät AB': string;
                        'Ulricehamns Energi AB': string;
                        'Umeå Energi Elnät AB': string;
                        'Upplands Energi ek för': string;
                        'Vaggeryds Elverk': string;
                        'Vallebygdens Energi ek för': string;
                        'Vantaan Energia Sähköverkot Oy': string;
                        'Vara Energi ek för': string;
                        'Varberg Energi AB': string;
                        'Varbergsortens Elkraft ek för': string;
                        'Vattenfall Eldistribution AB': string;
                        'Vattenfall Indalsälven AB': string;
                        'Viggafors Elektriska andelsförening upa': string;
                        'Vimmerby Energi Nät AB': string;
                        'VindIn Elnät AB': string;
                        'Vindpark Vänern Drift AB': string;
                        'Vinninga Elektriska Förening': string;
                        'VänerEnergi AB': string;
                        'Värnamo Elnät AB': string;
                        'Västerbergslagens Elnät AB': string;
                        'Västerviks Kraft Elnät AB': string;
                        'Västra Orusts Energitjänst ek för': string;
                        'Växjö Energi Elnät AB': string;
                        'YS Nät AB': string;
                        'Ystad Energi AB': string;
                        'Ålem Energi AB': string;
                        'Årsunda Kraft o Belysningsförening': string;
                        'Åsele Elnät AB': string;
                        'Öresundskraft AB': string;
                        'Österlens Kraft AB': string;
                        'Österlens Kraft ek för': string;
                        'Östra Kinds Elkraft ek för': string;
                        'Övertorneå Energi AB': string;
                        'Övik Energi Nät AB': string;
                    };
                    GAS: {
                        'Dansk Gas Distribution A/S': string;
                        'EON Gas Sverige AB': string;
                        'Gasnätet Stockholm AB': string;
                        'Göteborg Energi Gasnät AB': string;
                        'HMN GasNet P/S': string;
                        'Kraftringen Nät AB': string;
                        Other: string;
                        'SEAS-NVE Holding A/S': string;
                        'Swedegas AB': string;
                        'Varberg Energi AB': string;
                        'Öresundskraft AB': string;
                    };
                    HEATING: {
                        'Administrationsservice Fyn A/S': string;
                        'Adven Energilösningar AB': string;
                        'AffaldVarme Aarhus A/S': string;
                        'Affärsverken Karlskrona AB': string;
                        'Agder Energi Varme AS': string;
                        'Ale Fjärrvärme AB': string;
                        'Alingsås Energi Nät AB': string;
                        'Alvesta Energi AB': string;
                        'Aneby Miljö & Vatten AB': string;
                        'Arboga Energi AB': string;
                        'Arvidsjaurs Energi AB': string;
                        'Arvika Fjärrvärme AB': string;
                        'BKK Varme AS': string;
                        BTEA: string;
                        'Bengtsfors Energi': string;
                        Bionär: string;
                        'Bjärke Energi AB': string;
                        'Bodens Energi AB': string;
                        'Bollnäs Energi AB': string;
                        'Borgholm Energi AB': string;
                        'Borlänge Energi AB': string;
                        'Borås Energi och Miljö AB': string;
                        'Bromölla fjärrvärme AB': string;
                        'C4 Energi AB': string;
                        'Dala Energi': string;
                        'Degerfors Energi AB': string;
                        'EDA Energi AB': string;
                        'ENA Energi AB': string;
                        'EON Värme Sverige': string;
                        'Eidsiva Energi AS': string;
                        'Eksjö Energi AB': string;
                        'Elektra Värme AB': string;
                        'Emmaboda Energi AB': string;
                        'Enegia Market Services Oy': string;
                        'Enycon AB': string;
                        'Eskilstuna Energi & Miljö AB': string;
                        Ewii: string;
                        'Falbygdens Energi AB': string;
                        'Falkenberg Energi AB': string;
                        'Falu Energi & Vatten AB': string;
                        'Farmarenergi i Ed AB': string;
                        'Finspångs Tekniska Verk AB': string;
                        'Fjernvarme Fyn A/S': string;
                        'Fjärrvärme i Osby AB': string;
                        'Fors A/S': string;
                        'Forshaga Energi AB': string;
                        'Fortum Oslo Varme AS': string;
                        'Fortum Oyj': string;
                        'Fredrikstad Fjernvarme AS': string;
                        'Gislaved Energi': string;
                        'Glostrup Forsyning': string;
                        'Gotlands Energi AB': string;
                        'Gällivare Värmeverk AB': string;
                        'Gävle Energi AB': string;
                        'Göteborg Energi AB': string;
                        'Götene Vatten & Värme AB': string;
                        'HOFOR A/S': string;
                        'Habo Energi AB': string;
                        'Hagfors Energi AB': string;
                        'Halmstads Energi och Miljö AB': string;
                        'Hammarö Energi AB': string;
                        'Haparanda Värmeverk AB': string;
                        'Hardanger Energi AS': string;
                        'Hedemora Energi AB': string;
                        'Helen Oy': string;
                        'Herrljunga Elektriska AB': string;
                        'Hjo Energi AB': string;
                        'Hyvinkään Lämpövoima Oy': string;
                        'Härnösand Energi & Miljö AB': string;
                        'Hässleholm Miljö AB': string;
                        'Höganäs Energi AB': string;
                        'Jokkmokks Värmeverk AB': string;
                        'Jämtkraft AB': string;
                        'Jämtlandsvärme AB': string;
                        'Jönköping Energi AB': string;
                        'Kalmar Energi Värme AB': string;
                        'Karlsborg Energi AB': string;
                        'Karlshamn Energi AB': string;
                        'Karlskoga Energi & Miljö AB': string;
                        'Karlstads Energi AB': string;
                        'Kils Energi AB': string;
                        'Kraftringen Energi AB': string;
                        'Kristinehamns Fjärrvärme AB': string;
                        'Kungälv Energi AB': string;
                        'Kvitebjørn Varme AS': string;
                        'LEVA i Lysekil AB': string;
                        'Landskrona Energi AB': string;
                        'Lantmännen Agrovärme AB': string;
                        'Lappeenrannan Energia Oy': string;
                        'LaxåVärme Aktiebolag': string;
                        'Lekeberg Bioenergi AB': string;
                        'Lerum Fjärrvärme AB': string;
                        'Lessebo fjärrvärme AB': string;
                        'Lidköpings Värmeverk AB': string;
                        'Lilla Edets Fjärrvärme AB': string;
                        'Linde Energi AB': string;
                        'Ljungby Energi AB': string;
                        'Ljusdal Energi AB': string;
                        'Longyearbyens lokalstyre': string;
                        'Luleå Energi AB': string;
                        'Lunds Energikoncern AB': string;
                        'Malung-Sälenskommun Värmeverket': string;
                        'Mariestad-Töreboda Energi AB': string;
                        'Marks Värme AB': string;
                        'Miljøvarme VSEB AS': string;
                        'Mjölby-Svartådalen Energi AB': string;
                        'Mo Fjernvarme AS': string;
                        'Mullsjö Energi & MIljö AB': string;
                        'Munkfors Värmeverk AB': string;
                        'Mälarenergi AB': string;
                        'Mölndal Energi AB': string;
                        'Mörbylånga Kommun': string;
                        'Nevel AB': string;
                        'Njudung Energi Vetlanda AB': string;
                        'Norrenergi AB': string;
                        'Norrtälje Energi AB': string;
                        'Nybro Energi AB': string;
                        'Nässjö Affärsverk AB': string;
                        'Olotröms Kraft AB': string;
                        'Oskarshamn Energi AB': string;
                        Other: string;
                        'Oulun Energia Oy': string;
                        'Oxelö Energi AB': string;
                        'Pajala Värmeverk AB': string;
                        'Partille Energi AB': string;
                        'Peab Energi AB': string;
                        'Perstorps Fjärrvärme AB': string;
                        'Pite Energi AB': string;
                        'Ragunda Energi Teknik AB': string;
                        'Rindi Energi AB': string;
                        'Ronneby Miljö och Teknik AB': string;
                        'Rättviks Teknik AB': string;
                        'Sala-Heby Energi AB': string;
                        'Sandviken Energi AB': string;
                        'Skara Energi AB': string;
                        'Skellefteå Kraft AB': string;
                        'Skånska Energi Värme & Kyla AB': string;
                        'Skövde Värmeverk AB': string;
                        'Smedjebacken Energi AB': string;
                        'Sollentuna Energi AB': string;
                        'Solör Bioenergi Fjärrvärme AB': string;
                        'Sorsele kommun': string;
                        'Statkraft Varme AS': string;
                        'Statkraft Värme AB': string;
                        'Stenungsunds Energi och Miljö AB': string;
                        'Stockholm Exergi AB': string;
                        'Strängnäs Energi AB': string;
                        'Sundsvall Energi AB': string;
                        'Svedala Fjärrvärme AB': string;
                        'Svenljunga Energi AB': string;
                        'Sävsjö Energi AB': string;
                        'Söderhamn Nära AB': string;
                        'Södertörns Fjärrvärme AB': string;
                        'Sölvesborgs Energi och Vatten AB': string;
                        'Tafjord Kraftvarme AS': string;
                        'Tampereen Sähkölaitos Oy': string;
                        'Tekniska Verken i Kiruna AB': string;
                        'Tekniska Verken i Linköping AB': string;
                        'Telge Nät AB': string;
                        'Tidaholms Energi AB': string;
                        'Tierps Fjärrvärme AB': string;
                        'Torsby kommun': string;
                        'Torsås Fjärrvärme AB': string;
                        'Tranås Energi AB': string;
                        'Trelleborgs Fjärrvärme AB': string;
                        'Trollhättan Energi AB': string;
                        'Turku Energia-Åbo Energi Ab, Oy': string;
                        'Tussa Energi AS': string;
                        'Uddevalla Energi AB': string;
                        'Ulricehamns Energi AB': string;
                        'Umeå Energi AB': string;
                        'Vaggeryds Energi AB': string;
                        'Vantaan Energia Oy': string;
                        'Vara Värme AB': string;
                        'Varberg Energi AB': string;
                        'Vasa Holding Värme': string;
                        'Vattenfall AB': string;
                        'Vejlby Fjernvarme': string;
                        'Vejle Fjernvarme a.m.b.a': string;
                        'Vilniaus šilumos tinklai AB': string;
                        'Vimmerby Energi AB': string;
                        'VänerEnergi AB': string;
                        'Värmevärden AB': string;
                        'Värnamo Energi AB': string;
                        'Västerbergslagens Energi AB': string;
                        'Västervik Miljö & Energi AB': string;
                        'Västra Mälardalens Energi & Miljö AB': string;
                        'Växjö Energi AB': string;
                        'Ystad Energi AB': string;
                        'Älvsbyns Fjärrvärme': string;
                        'Ånge Energi AB': string;
                        'Åsele Energi AB': string;
                        'Öresundskraft AB': string;
                        'Örkelljunga Fjärrvärmeverk AB': string;
                        'Österlens Kraft AB': string;
                        'Överkalix Värmeverk AB': string;
                        'Övik Energi AB': string;
                    };
                    HOTWATER: {
                        'AB Borlänge Energi': string;
                        'AB Boxholmsteknik': string;
                        'Aarhus Vand A/S': string;
                        'Administrationsservice Fyn A/S': string;
                        'Ale kommun': string;
                        'Alingsås kommun': string;
                        'Alvesta kommun': string;
                        'Aneby Miljö & Vatten AB': string;
                        'Arboga kommun': string;
                        'Arjeplogs kommun': string;
                        'Arvidsjaurs kommun': string;
                        'Arvika Teknik AB': string;
                        'Askersunds kommun': string;
                        'Avesta VA och Avfall AB': string;
                        'Avesta kommun': string;
                        'Bengtsfors kommun': string;
                        'Bergs kommun': string;
                        'Bjurholms kommun': string;
                        'BlueKolding A/S': string;
                        'Bodens kommun': string;
                        'Bollebygds kommun': string;
                        'Borgholms Energi AB': string;
                        'Borgholms kommun': string;
                        'Borlänge kommun': string;
                        'Borås Energi och Miljö AB': string;
                        'Borås stad': string;
                        'Botkyrka kommun': string;
                        'Bramdrupdam Vandværk': string;
                        'Bräcke kommun': string;
                        'Dala Vatten och Avfall AB': string;
                        'Dals-Eds kommun': string;
                        'Danderyds kommun': string;
                        'Degerfors kommun': string;
                        'Dorotea kommun': string;
                        'Eda kommun': string;
                        'Eidsiva Energi AS': string;
                        'Ekerö kommun': string;
                        'Eksjö Energi AB': string;
                        'Emmaboda Energi & Miljö AB': string;
                        'Enegia Market Services Oy': string;
                        'Enköpings kommun': string;
                        'Eskilstuna Energi & Miljö AB': string;
                        'Essunga kommun': string;
                        'Falköpings kommun': string;
                        'Falu Energi & Vatten AB': string;
                        'Filipstads kommun': string;
                        'Finspångs Tekniska Verk AB': string;
                        'Fors A/S': string;
                        'Forshaga kommun': string;
                        'Gislaveds kommun': string;
                        'Glostrup Forsyning': string;
                        'Gnesta kommun': string;
                        'Gnosjö kommun': string;
                        'Grums kommun': string;
                        'Gryaab AB': string;
                        'Grästorps kommun': string;
                        'Gullspångs kommun': string;
                        'Gällivare kommun': string;
                        'Gästrike Vatten AB': string;
                        'Gävle kommun Miljö och hälsa': string;
                        'Göteborgs Stad Kretslopp och vatten': string;
                        'Göteborgsregionens kommunalförbund': string;
                        'Götene Vatten & Värme AB': string;
                        'Götene kommun': string;
                        'Habo kommun': string;
                        'Hagfors kommun': string;
                        'Hallsbergs kommun': string;
                        'Hallstahammars kommun': string;
                        'Halmstads kommun': string;
                        'Hammarö kommun': string;
                        'Haninge kommun': string;
                        'Haparanda Stad': string;
                        'Heby kommun': string;
                        'Hedemora Energi AB': string;
                        'Hedemora kommun': string;
                        'Helsinge Vatten AB': string;
                        'Herrljunga Vatten AB': string;
                        'Hjo kommun': string;
                        'Hudiksvalls kommun': string;
                        'Hylte kommun': string;
                        'Härjedalens kommun': string;
                        'Härnösand Energi & Miljö AB': string;
                        'Härryda kommun': string;
                        'Hässleholms Vatten AB': string;
                        'Håbo kommun': string;
                        'Höganäs kommun': string;
                        'Jokkmokks kommun': string;
                        'Järfälla kommun': string;
                        'Jönköpings kommun': string;
                        'Kalix kommun': string;
                        'Kalmar Vatten AB': string;
                        'Karlsborgs kommun': string;
                        'Karlshamns kommun': string;
                        'Karlskoga kommun': string;
                        'Karlskrona kommun': string;
                        'Karlstads kommun': string;
                        'Kils kommun': string;
                        'Kinda kommun': string;
                        'Kiruna kommun': string;
                        'Klippans kommun': string;
                        'Kramfors kommun': string;
                        'Kristianstads kommun': string;
                        'Kristinehamns kommun': string;
                        'Krokoms kommun': string;
                        'Kumla kommun': string;
                        'Kungsbacka kommun': string;
                        'Kungsörs Vatten AB': string;
                        'Kungälvs kommun': string;
                        Käppalaförbundet: string;
                        'Kävlinge kommun': string;
                        'LEVA i Lysekil AB': string;
                        'Laholmsbukten VA': string;
                        'Laxå Vatten AB': string;
                        'Lekebergs kommun': string;
                        'Lerums kommun': string;
                        'Lessebo kommun': string;
                        'Lidingö Stad': string;
                        'Lidköpings kommun': string;
                        'Lilla Edets kommun': string;
                        'Linköpings kommun': string;
                        'Ljungby kommun': string;
                        'Ljusdals Vatten AB': string;
                        'Lomma kommun': string;
                        'Luleå kommun': string;
                        'Lycksele Avfall och Vatten AB': string;
                        'Malå kommun': string;
                        'Mariestads kommun': string;
                        'Markaryds kommun': string;
                        'Marks kommun': string;
                        'Melleruds kommun': string;
                        'Miljö och Vatten i Örnsköldsvik AB': string;
                        'MittSverige Vatten & Avfall AB': string;
                        'Mittskåne Vatten': string;
                        'Mjölby kommun': string;
                        'Mora Vatten AB': string;
                        'Motala kommun': string;
                        'Mullsjö Energi & Miljö AB': string;
                        'Mullsjö kommun': string;
                        'Munkfors kommun': string;
                        'Mölndals stad': string;
                        'Mönsterås kommun': string;
                        'Mörbylånga kommun': string;
                        'NSVA Nordvästra Skånes': string;
                        NVK: string;
                        'Nacka Vatten och Avfall AB': string;
                        'Nacka kommun': string;
                        'Njudung Energi Vetlanda AB': string;
                        'Nordmalings kommun': string;
                        'Norra Dalarna Vatten och Avfall AB, NODAVA': string;
                        'Norra Västmanlands': string;
                        'Norra Västmanlands Kommunalteknikförbund': string;
                        'Norrköping Vatten och Avfall AB': string;
                        'Norrköpings kommun': string;
                        'Norrtälje kommun': string;
                        Norrvatten: string;
                        'Norsjö kommun': string;
                        'Nybro Elnät AB': string;
                        'Nykvarns kommun': string;
                        'Nyköping-Oxelösund': string;
                        'Nyköpings kommun Nyköping Vatten': string;
                        'Nynäshamns kommun': string;
                        'Nässjö Affärsverk AB': string;
                        'Nässjö kommun': string;
                        'Orust kommun': string;
                        'Oskarshamns kommun': string;
                        Other: string;
                        'Oxelö Energi AB': string;
                        'Pajala kommun': string;
                        'Partille kommun': string;
                        'Perstorps kommun': string;
                        'Piteå Renhållning & Vatten AB': string;
                        'Piteå kommun': string;
                        'Ragunda kommun': string;
                        'Region Gotland': string;
                        'Robertsfors kommun': string;
                        'Ronneby Miljö & Teknik AB': string;
                        'Roslagsvatten AB': string;
                        SYVAB: string;
                        'Sala kommun': string;
                        'Salems kommun': string;
                        'Samhällsbyggnad Bergslagen': string;
                        'Sandviken Energi Vatten AB': string;
                        'Sandvikens kommun': string;
                        'Sigtuna Vatten & Renhållning AB': string;
                        'Sigtuna kommun': string;
                        'Simrishamns kommun': string;
                        'Sjöbo kommun': string;
                        'Skara Energi AB': string;
                        'Skaraborgsvatten KF': string;
                        'Skellefteå kommun': string;
                        'Skinnskattebergs kommun': string;
                        'Skurups kommun': string;
                        'Skåne Blekinge Vattentjänst AB, SBVT': string;
                        'Skövde kommun': string;
                        'Sollefteå kommun': string;
                        'Sollentuna Energi och Miljö AB': string;
                        'Sollentuna kommun': string;
                        'Solna Stad': string;
                        'Solna Vatten AB': string;
                        'Sorsele kommun': string;
                        'Staffanstorps kommun': string;
                        'Stenungsunds kommun': string;
                        'Stockholm Vatten och Avfall AB': string;
                        'Storfors kommun': string;
                        'Storumans kommun': string;
                        'Strängnäs Energi Vatten AB, SEVAB': string;
                        'Strängnäs kommun': string;
                        'Strömstads kommun': string;
                        'Strömsunds kommun': string;
                        'Sundbybergs Avfall och Vatten AB': string;
                        'Sunne kommun': string;
                        'Surahammars Kommunalteknik AB': string;
                        'Svedala kommun': string;
                        'Svenljunga kommun': string;
                        'Sydvatten AB': string;
                        'Säffle kommun': string;
                        'Säters kommun': string;
                        'Sävsjö kommun': string;
                        'Söderhamn Nära AB': string;
                        'Söderhamns kommun': string;
                        'Söderköpings kommun': string;
                        'Södertälje kommun': string;
                        'Sölvesborg Energi och Vatten AB': string;
                        'Sörmland Vatten o Avfall AB': string;
                        'Tanums kommun': string;
                        'Tekniska Verken i Kiruna AB': string;
                        'Tekniska Verken i Linköping AB': string;
                        'Telge Nät AB': string;
                        'Tibro kommun': string;
                        'Tidaholms kommun': string;
                        'Tierps Energi & Miljö AB': string;
                        'Tingsryds kommun': string;
                        'Tjörns kommun': string;
                        'Tomelilla kommun': string;
                        'Torsby kommun': string;
                        'Torsås kommun': string;
                        'Tranemo kommun': string;
                        'Tranås kommun': string;
                        'Trelleborgs kommun': string;
                        'Trollhättan Energi AB': string;
                        'Trosa kommun': string;
                        'Tyresö kommun': string;
                        'Täby kommun': string;
                        'Töreboda kommun': string;
                        'Ulricehamns Energi AB': string;
                        'Ulricehamns kommun': string;
                        'Upplands Bro kommun': string;
                        'Upplands Väsby kommun': string;
                        'Uppsala Vatten och Avfall AB': string;
                        'Uppsala kommun': string;
                        'Uppvidinge kommun': string;
                        'VA SYD': string;
                        'VA-Bolaget i Karlskoga AB': string;
                        'Vadstena kommun': string;
                        'Vaggeryds kommun': string;
                        'Vakin, Vatten- och Avfallskompetens i Norr AB': string;
                        'Valdemarsviks kommun': string;
                        'Vara kommun': string;
                        'Vatten & Avfall i Malung-Sälen AB, VAMAS': string;
                        'Vatten & Miljö i Väst AB, VIVAB': string;
                        'Vatten och Avlopp AB': string;
                        'Vellinge kommun': string;
                        'Vilhelmina kommun': string;
                        'Vimmerby Energi & Miljö AB': string;
                        'Vänersborgs kommun': string;
                        'Vännäs kommun': string;
                        'Värmdö kommun': string;
                        'Värnamo kommun': string;
                        'Västervik Miljö & Energi AB, VMEAB': string;
                        'Västerås stad': string;
                        'Västra Mälardalens Energi & Miljö AB': string;
                        'Västvatten AB': string;
                        'Växjö kommun': string;
                        'Vårgårda kommun': string;
                        'Wessman Barken Vatten och Återvinning AB': string;
                        'Ydre kommun': string;
                        'Ystads kommun': string;
                        'Älmhults kommun': string;
                        'Älvsbyns Energi AB': string;
                        'Älvsbyns kommun': string;
                        'Ängelholms kommun': string;
                        'Åmåls kommun': string;
                        'Ånge kommun': string;
                        'Åre kommun': string;
                        'Årjängs kommun': string;
                        'Åsele kommun': string;
                        'Åtvidabergs Vatten AB': string;
                        'Öckerö kommun': string;
                        'Ödeshögs kommun': string;
                        'Örebro kommun': string;
                        'Örkelljunga kommun': string;
                        'Örnsköldsviks kommun': string;
                        'Östersunds kommun': string;
                        'Östra Smålands Kommunalteknikförbund': string;
                        'Överkalix kommun': string;
                        'Övertorneå kommun': string;
                    };
                };
                Kind: {
                    COLDWATER: string;
                    COOLING: string;
                    ELECTRICITY: string;
                    GAS: string;
                    HEATING: string;
                    HOTWATER: string;
                    OIL: string;
                    PELLETS: string;
                    RESIDUAL_WASTE: string;
                };
                PMKind: {
                    coldwater: string;
                    converter: string;
                    cooling: string;
                    electricity_distribution: string;
                    electricity_market: string;
                    gas_distribution: string;
                    gas_market: string;
                    heating: string;
                    hotwater: string;
                    oil: string;
                    pellets: string;
                    waste: string;
                };
                TradingCompany: {};
                Type: {
                    customer: string;
                    global: string;
                    mestro: string;
                };
            };
            Profile: {
                ExtProfileSource: {
                    Datscha: string;
                    FastAPI: string;
                    Off: string;
                };
                MestroEnvModel: {
                    LOCATION_BASED: string;
                    MARKET_BASED: string;
                    NONE: string;
                };
            };
            User: {
                Access: {
                    '0': string;
                    '7': string;
                    '31': string;
                    '1073741823': string;
                    '2147483647': string;
                    '-1': string;
                };
                Language: {
                    'da-DK': string;
                    'en-US': string;
                    'fi-FI': string;
                    'nb-NO': string;
                    'sv-SE': string;
                };
                Role: {
                    FIN_ACC: string;
                    FIN_ADM: string;
                    MANAGEMENT: string;
                    OTHER: string;
                    PROP_OPS: string;
                    SUST_ENV: string;
                    TECH_ADM: string;
                };
            };
            Vehicle: {
                Fuel: {
                    biogas: string;
                    diesel: string;
                    electricity: string;
                    ethanol: string;
                    gasoline: string;
                };
                VehicleType: {
                    boat: string;
                    bus: string;
                    car: string;
                    motorbike: string;
                    train: string;
                    truck: string;
                };
            };
        };
        properties: {
            APIUser: {
                Password: string;
                RequestAllowance: string;
                UserName: string;
            };
            AlarmInfo: {
                Coverage: string;
                MissingCons: string;
                OutrageousCons: string;
                Threshold: string;
            };
            Area: {
                ATemp: string;
                BOA: string;
                BOALOA: string;
                BRA: string;
                BTA: string;
                BYA: string;
                LOA: string;
            };
            Billing: {
                Comment: string;
                Locked: string;
                PreliminaryAmount: string;
                SurchargePerKWH: string;
            };
            Building: {
                BaseTemp: string;
                BuildingType: string;
                BuildingYear: string;
                ConstructionMaterial: string;
                ControlSystem: string;
                EnvironmentalClass: string;
                MajorRenovation: string;
                PrimaryObjectId: string;
                Responsible: string;
                SecondaryObjectId: string;
                Street: string;
                Timeline: string;
            };
            CollectionGroup: {
                Parser: string;
                Sender: string;
            };
            Component: {
                ConsType: string;
                Type: string;
                VMSettings: string;
            };
            ContactInfo: {
                EMail: string;
                Name: string;
                Phone: string;
            };
            CostCenter: {
                GLNNumber: string;
                OrgNumber: string;
                ResultUnit: string;
            };
            CostData: {
                Apartments: string;
                ChargingEffect1: string;
                ChargingEffect2: string;
                DayWaterTax: string;
                EnergyCapacity: string;
                FixedCostFactor: string;
                SubscribedEffect1: string;
                SubscribedEffect2: string;
                VATPart: string;
                WaterFlow: string;
            };
            Customer: {
                BaseYear: string;
                Contact: string;
                ContactMail: string;
                ContractSignedDate: string;
                Industry: string;
                LeaseStartDate: string;
                OrgNumber: string;
                Responsible: string;
                ResultUnit: string;
                Signatories: string;
                StandardArea: string;
                SupportMail: string;
                Webpage: string;
            };
            DDCache: {
                BaseMonths: string;
                DDCalcType: string;
                HotWaterPart: string;
            };
            E4: {
                ConsumptionPoints: string;
            };
            EPC: {
                Date: string;
                EnergyEfficiency: string;
                PET: string;
                RadonMeasure: string;
                Rating: string;
                Reason: string;
                Status: string;
                VentilationControl: string;
            };
            ExtDatscha: {
                Comment: string;
                Login: string;
                Password: string;
            };
            ExtFastAPI: {
                Comment: string;
                Login: string;
                Password: string;
            };
            FlatCost: {
                Price: string;
            };
            GRESBBuilding: {
                AssetValue: string;
                AverageVacancy: string;
                BuildingID: string;
                GHGOffsetsPurchased: string;
                OwnershipPeriod: string;
                Renovation: string;
            };
            GRESBPortfolio: {
                CompanyName: string;
                Contact: string;
                Description: string;
            };
            GRESBPremises: {
                Include: string;
                ManagedAsset: string;
            };
            GeneralArea: {
                Area: string;
            };
            KeyValue: {
                Apartments: string;
                Residents: string;
                VTemp: string;
            };
            Location: {
                DegreeDaysQuantity: string;
                Latitude: string;
                Longitude: string;
                Type: string;
            };
            LocationMeta: {
                Addresses: string;
                Latitude: string;
                Longitude: string;
                Municipality: string;
            };
            MatrixCost: {
                DateFilterFormula: string;
                DateFilterProfile: string;
                MatrixCost: string;
                MatrixKey: string;
                MatrixType: string;
            };
            Meter: {
                DefaultDataType: string;
                DefaultUOM: string;
                Description: string;
                Distributor: string;
                FuseSize: string;
                IncludeInInput: string;
                InstallationID: string;
                Key: string;
                Kind: string;
                Level: string;
                Make: string;
                MissingDataSeconds: string;
                PhysicalID: string;
                PrimaryObjectId: string;
                Quantity: string;
                ReadingSystem: string;
                Resolution: string;
                SecondaryObjectId: string;
                Status: string;
                TradingCompany: string;
                WaterMeterSize: string;
            };
            MyPages: {
                Password: string;
                URL: string;
                Username: string;
            };
            Node: {
                Hidden: string;
                Name: string;
            };
            OutvoiceInfo: {
                Discounts: string;
                LeaseMeta: string;
                Products: string;
                VATPercent: string;
            };
            Premises: {
                AdministrativeAssistant: string;
                BusinessArea: string;
                Caretaker: string;
                City: string;
                Country: string;
                ExcludeFromPDF: string;
                InvoicingId: string;
                Latitude: string;
                LocationDDN: string;
                LocationName: string;
                LocationSMHI: string;
                Longitude: string;
                Manager: string;
                OrgNumber: string;
                OwningCompany: string;
                PDFRecipients: string;
                PostalCode: string;
                PrimaryObjectId: string;
                PropertyDesignation: string;
                Region: string;
                SecondaryObjectId: string;
                Signatories: string;
                Street: string;
                TechnicalManager: string;
                Technician: string;
                VATPart: string;
            };
            PremisesGroup: {
                Contact: string;
                ContactMail: string;
                Description: string;
                PrimaryObjectId: string;
                SecondaryObjectId: string;
            };
            PriceModel: {
                Currency: string;
                CustomerAccess: string;
                Distributor: string;
                Key: string;
                Kind: string;
                PMKind: string;
                RenewablePart: string;
                SubKind: string;
                TradingCompany: string;
                Type: string;
                UpdateIntervalMonths: string;
                VAT: string;
                ValidFrom: string;
            };
            PricePart: {
                ArticleNumber: string;
                Implementation: string;
                InputQuantity: string;
                IsNegative: string;
                LimitToCache: string;
                OutputQuantity: string;
                Periodicity: string;
                ReadingTag: string;
                Resolution: string;
                SQ: string;
                Tax: string;
                Type: string;
            };
            Product: {
                Package_EnergyAnalysis: string;
                Package_FinancesAndAdministration: string;
                Package_SustainabilityAndEnvironment: string;
            };
            Profile: {
                EPC: string;
                EnvironmentalGuests: string;
                ExtProfileSource: string;
                GRESBEnabled: string;
                GuestNights: string;
                MestroCostModel: string;
                MestroEnvModel: string;
                OneflowIntegration: string;
                RealCost: string;
                Servings: string;
                Transportation: string;
                UnspecifiedWater: string;
                Vacancy: string;
                Visitors: string;
            };
            Robot: {
                AcceptedIDs: string;
                ActualID: string;
                LatestUTCS: string;
                LatestValue: string;
            };
            Root: {
                Type: string;
            };
            Section: {
                ContractNumber: string;
                DistributePremisesEnergy: string;
                IncludeVAT: string;
                SectionId: string;
                SectionType: string;
                Tenant: string;
            };
            SeriesPricePart: {
                DateFilterFormula: string;
                DateFilterProfile: string;
                Price: string;
            };
            Tenant: {
                Contact: string;
                Email: string;
                Employees: string;
                Info: string;
                LegacyLKey: string;
                Logo: string;
                OrgNumber: string;
                PDFRecipients: string;
                PrimaryObjectId: string;
                SecondaryObjectId: string;
            };
            ThresholdPricePart: {
                AboveThresholdPrice: string;
                BelowThresholdPrice: string;
                DateFilterFormula: string;
                DateFilterProfile: string;
                Threshold: string;
            };
            User: {
                Access: string;
                Company: string;
                Email: string;
                Icon: string;
                Language: string;
                Password: string;
                Phone: string;
                ReportSettings: string;
                Role: string;
                Title: string;
                VerCode: string;
            };
            Vehicle: {
                Brand: string;
                Fuel: string;
                Model: string;
                RegistrationNumber: string;
                VehicleType: string;
                Year: string;
            };
            VirtualMeter: {
                Implementation: string;
                NegativeLimit: string;
                OutQuantity: string;
            };
            VirtualMeterDistribute: {
                MainMeter: string;
            };
            VirtualMeterFormula: {
                Formula: string;
                Input: string;
                OutResolution: string;
                Parsable: string;
                ReadingList: string;
            };
            VirtualMeterPercent: {
                MainMeter: string;
                Percent: string;
            };
            VirtualUnit: {
                Classification: string;
                Contract: string;
                Key: string;
                PrimaryObjectId: string;
                SecondaryObjectId: string;
                Verified: string;
            };
        };
        typePlural: {
            APIUser: string;
            Building: string;
            CollectionGroup: string;
            Component: string;
            CostCenter: string;
            Customer: string;
            FlatCost: string;
            Location: string;
            MatrixCost: string;
            Meter: string;
            Node: string;
            Premises: string;
            PremisesGroup: string;
            PriceModel: string;
            PricePart: string;
            Root: string;
            Section: string;
            SeriesPricePart: string;
            Tenant: string;
            ThresholdPricePart: string;
            User: string;
            Vehicle: string;
            VirtualMeter: string;
            VirtualMeterDistribute: string;
            VirtualMeterFormula: string;
            VirtualMeterPercent: string;
            VirtualUnit: string;
            BP: string;
            Favorite: string;
            'Meter#COLDWATER': string;
            'Meter#COOLING': string;
            'Meter#ELECTRICITY': string;
            'Meter#GAS': string;
            'Meter#HEATING': string;
            'Meter#HOTWATER': string;
            'Meter#OIL': string;
            'Premises#Lantmäteriet': string;
            'PremisesGroup#Virtual': string;
            'Section#AVAILABLE': string;
            'Section#UNAVAILABLE': string;
            'SubMeter#COLDWATER': string;
            'SubMeter#COOLING': string;
            'SubMeter#ELECTRICITY': string;
            'SubMeter#GAS': string;
            'SubMeter#HEATING': string;
            'SubMeter#HOTWATER': string;
            'TenantMeter#COLDWATER': string;
            'TenantMeter#COOLING': string;
            'TenantMeter#ELECTRICITY': string;
            'TenantMeter#GAS': string;
            'TenantMeter#HEATING': string;
            'TenantMeter#HOTWATER': string;
        };
        typeSingular: {
            APIUser: string;
            AlarmInfo: string;
            Area: string;
            Billing: string;
            Building: string;
            CollectionGroup: string;
            Component: string;
            ContactInfo: string;
            CostCenter: string;
            CostData: string;
            Customer: string;
            DDCache: string;
            E4: string;
            EPC: string;
            ExtDatscha: string;
            ExtFastAPI: string;
            FlatCost: string;
            GRESBBuilding: string;
            GRESBPortfolio: string;
            GRESBPremises: string;
            GeneralArea: string;
            KeyValue: string;
            Location: string;
            LocationMeta: string;
            MatrixCost: string;
            Meter: string;
            MyPages: string;
            Node: string;
            OutvoiceInfo: string;
            Premises: string;
            PremisesGroup: string;
            PriceModel: string;
            PricePart: string;
            Product: string;
            Profile: string;
            Robot: string;
            Root: string;
            Section: string;
            SeriesPricePart: string;
            Tenant: string;
            ThresholdPricePart: string;
            User: string;
            Vehicle: string;
            VirtualMeter: string;
            VirtualMeterDistribute: string;
            VirtualMeterFormula: string;
            VirtualMeterPercent: string;
            VirtualUnit: string;
            Address: string;
            BP: string;
            ContactMestro: string;
            Favorite: string;
            Input: string;
            Management: string;
            PremisesLocation: string;
            Settings: string;
        };
        userRootNodeName: string;
        virtual_premises_name: {
            '': string;
            HOT_1: string;
            IND_1: string;
            INV_1: string;
            LOG_1: string;
            OFF_1: string;
            RES_1: string;
            RET_1: string;
        };
    };
    nodeView: {
        header: {
            addToFavoritesTitle: string;
            degreeDaySummary: string;
            noClimateStation: string;
        };
    };
    noPreviousAlarm: {
        createAlarm: string;
    };
    odMeta: {
        header: string;
        noData: string;
        period: string;
    };
    organizationField: {
        organizationLabel: string;
        organizationLabelSecondary: string;
    };
    password: {
        title: string;
    };
    passwordField: {
        hidePassword: string;
        passwordLabel: string;
        passwordLabelSecondary: string;
        showPassword: string;
    };
    passwordInputField: {
        newPassword: string;
        oldPassword: string;
    };
    passwordMessage: {
        instructions: string;
        messages: {
            checkPwd: string;
            currentPwdInvalid: string;
            enterCurrentPwd: string;
            enterNewPwd: string;
            saveError: string;
            saveOk: string;
        };
    };
    pdf: {
        comparison: {
            heading: {
                COST_SEK: string;
                ENERGY: string;
                ENV_CO2: string;
                VOLUME: string;
            };
        };
        comparisonChange: {
            change: string;
        };
        comparisonOverPeriod: {
            average: string;
            bestProperty: string;
            cons: string;
            consByArea: string;
            worstProperty: string;
            yourProperty: string;
        };
        comparisonValue: {
            aboveGoal: string;
            belowGoal: string;
            last12Months: string;
        };
        decorationBand: {
            activeTenantSince: string;
            area: {
                management: string;
                tenant: string;
                unit: string;
            };
            coverage: string;
            includedProperties: string;
            ofTotalArea: string;
            registrationNumber: string;
            reportPeriod: string;
        };
        distribution: {
            heading: string;
            subheading: string;
        };
        goal: {
            heading: {
                ENERGY: string;
                ENV_CO2: string;
                VOLUME: string;
                WEIGHT: string;
            };
        };
        goalChange: {
            goal: string;
        };
        header: {
            biannually: string;
            monthly: string;
            quarterly: string;
            tertiary: string;
            yearly: string;
        };
        info: {
            heading: string;
        };
        keyValue: {
            cost: string;
            environment: string;
            previousPeriod: string;
            usage: string;
            usageByArea: string;
        };
        keyValueChange: {
            change: string;
        };
        keyValueRef: {
            previousPeriod: string;
        };
        keyValues: {
            cost: string;
            environment: string;
            period: {
                'last 6 months': string;
                'last 12 months': string;
                'last month': string;
                'last quarter': string;
            };
            previousPeriod: string;
            usage: string;
            usageByArea: string;
        };
        perspective: {
            decrease: {
                ENERGY: string;
                ENV_CO2: string;
                VOLUME: string;
            };
            heading: {
                ENERGY: string;
                ENV_CO2: string;
                VOLUME: string;
            };
            increase: {
                ENERGY: string;
                ENV_CO2: string;
                VOLUME: string;
            };
            kpi: {
                ENERGY: string;
                ENV_CO2: string;
                VOLUME: string;
            };
        };
        perspectiveLabel: {
            kpi: {
                ENERGY: string;
                ENV_CO2: string;
                VOLUME: string;
            };
            percentage: {
                ENERGY: string;
                ENV_CO2: string;
                VOLUME: string;
            };
        };
        ranking: {
            best: {
                cons: string;
                consByArea: string;
                percentageChange: string;
            };
            worst: {
                cons: string;
                consByArea: string;
                percentageChange: string;
            };
        };
        rankingName: {
            average: string;
            comparison: string;
            rank: string;
            self: string;
        };
        widget: {
            coverage: string;
            missingData: string;
        };
    };
    periodPicker: {
        month: string;
        quarter: string;
        year: string;
    };
    phoneNumberField: {
        phoneNumberLabel: string;
        phoneNumberLabelSecondary: string;
    };
    phoneNumberInput: {
        AB: string;
        AC: string;
        AD: string;
        AE: string;
        AF: string;
        AG: string;
        AI: string;
        AL: string;
        AM: string;
        AO: string;
        AQ: string;
        AR: string;
        AS: string;
        AT: string;
        AU: string;
        AW: string;
        AX: string;
        AZ: string;
        BA: string;
        BB: string;
        BD: string;
        BE: string;
        BF: string;
        BG: string;
        BH: string;
        BI: string;
        BJ: string;
        BL: string;
        BM: string;
        BN: string;
        BO: string;
        BQ: string;
        BR: string;
        BS: string;
        BT: string;
        BV: string;
        BW: string;
        BY: string;
        BZ: string;
        CA: string;
        CC: string;
        CD: string;
        CF: string;
        CG: string;
        CH: string;
        CI: string;
        CK: string;
        CL: string;
        CM: string;
        CN: string;
        CO: string;
        country: string;
        CR: string;
        CU: string;
        CV: string;
        CW: string;
        CX: string;
        CY: string;
        CZ: string;
        DE: string;
        DJ: string;
        DK: string;
        DM: string;
        DO: string;
        DZ: string;
        EC: string;
        EE: string;
        EG: string;
        EH: string;
        ER: string;
        ES: string;
        ET: string;
        ext: string;
        FI: string;
        FJ: string;
        FK: string;
        FM: string;
        FO: string;
        FR: string;
        GA: string;
        GB: string;
        GD: string;
        GE: string;
        GF: string;
        GG: string;
        GH: string;
        GI: string;
        GL: string;
        GM: string;
        GN: string;
        GP: string;
        GQ: string;
        GR: string;
        GS: string;
        GT: string;
        GU: string;
        GW: string;
        GY: string;
        HK: string;
        HM: string;
        HN: string;
        HR: string;
        HT: string;
        HU: string;
        ID: string;
        IE: string;
        IL: string;
        IM: string;
        IN: string;
        IO: string;
        IQ: string;
        IR: string;
        IS: string;
        IT: string;
        JE: string;
        JM: string;
        JO: string;
        JP: string;
        KE: string;
        KG: string;
        KH: string;
        KI: string;
        KM: string;
        KN: string;
        KP: string;
        KR: string;
        KW: string;
        KY: string;
        KZ: string;
        LA: string;
        LB: string;
        LC: string;
        LI: string;
        LK: string;
        LR: string;
        LS: string;
        LT: string;
        LU: string;
        LV: string;
        LY: string;
        MA: string;
        MC: string;
        MD: string;
        ME: string;
        MF: string;
        MG: string;
        MH: string;
        MK: string;
        ML: string;
        MM: string;
        MN: string;
        MO: string;
        MP: string;
        MQ: string;
        MR: string;
        MS: string;
        MT: string;
        MU: string;
        MV: string;
        MW: string;
        MX: string;
        MY: string;
        MZ: string;
        NA: string;
        NC: string;
        NE: string;
        NF: string;
        NG: string;
        NI: string;
        NL: string;
        NO: string;
        NP: string;
        NR: string;
        NU: string;
        NZ: string;
        OM: string;
        OS: string;
        PA: string;
        PE: string;
        PF: string;
        PG: string;
        PH: string;
        phone: string;
        PK: string;
        PL: string;
        PM: string;
        PN: string;
        PR: string;
        PS: string;
        PT: string;
        PW: string;
        PY: string;
        QA: string;
        RE: string;
        RO: string;
        RS: string;
        RU: string;
        RW: string;
        SA: string;
        SB: string;
        SC: string;
        SD: string;
        SE: string;
        SG: string;
        SH: string;
        SI: string;
        SJ: string;
        SK: string;
        SL: string;
        SM: string;
        SN: string;
        SO: string;
        SR: string;
        SS: string;
        ST: string;
        SV: string;
        SX: string;
        SY: string;
        SZ: string;
        TA: string;
        TC: string;
        TD: string;
        TF: string;
        TG: string;
        TH: string;
        TJ: string;
        TK: string;
        TL: string;
        TM: string;
        TN: string;
        TO: string;
        TR: string;
        TT: string;
        TV: string;
        TW: string;
        TZ: string;
        UA: string;
        UG: string;
        UM: string;
        US: string;
        UY: string;
        UZ: string;
        VA: string;
        VC: string;
        VE: string;
        VG: string;
        VI: string;
        VN: string;
        VU: string;
        WF: string;
        WS: string;
        XK: string;
        YE: string;
        YT: string;
        ZA: string;
        ZM: string;
        ZW: string;
        ZZ: string;
    };
    portal: {
        altModeOverlay: {
            return: string;
        };
        header: {
            controls: {
                management: {
                    label: string;
                };
                overview: {
                    label: string;
                };
                reports: {
                    label: string;
                    sections: {
                        access: string;
                        basic: string;
                        energyAnalysis: string;
                        financesAndAdministration: string;
                        sustainabilityAndEnvironment: string;
                    };
                };
                support: {
                    calcMissingSubMenu: {
                        areaDiv: string;
                        cost: string;
                        degreeDays: string;
                        environment: string;
                        virtualMeter: string;
                    };
                    label: string;
                    sections: {
                        misc: string;
                        report: string;
                    };
                    supportModal: {
                        header: string;
                        message: string;
                        noButton: string;
                        report: string;
                        'submenu-areaDiv': string;
                        'submenu-cost': string;
                        'submenu-degreeDays': string;
                        'submenu-environment': string;
                        'submenu-virtualMeter': string;
                        yesButton: string;
                    };
                    tools: {
                        contact: string;
                        incorrectData: string;
                        missingCalculation: string;
                        missingData: string;
                    };
                };
                tools: {
                    label: string;
                    sections: {
                        agreements: string;
                        billing: string;
                        export: string;
                        holdings: string;
                        meters: string;
                        statistics: string;
                        users: string;
                    };
                };
            };
            helpMenu: {
                contactSupport: string;
                knowledgeBase: string;
                menuTitle: string;
            };
            userMenu: {
                logout: string;
                userProfile: string;
            };
        };
    };
    premisesCrud: {
        multiCrudHandler: {
            addAdditional: string;
            addChild: string;
            crud: string;
            overview: string;
        };
    };
    premiumCard: {
        description: string;
        heading: string;
        shortDescription: string;
    };
    previewContent: {
        iframeTitle: string;
        noPreview: string;
    };
    pricePartCrud: {
        choice: {
            ContractType: {
                Fixed: string;
                Variable: string;
            };
            EmissionScopeTag: {
                scope1: string;
                scope2: string;
                scope3: string;
            };
            Implementation: {
                EnergyTax: string;
                FixedCost: string;
                SeriesCost: string;
                TransmissionFee: string;
            };
            PriceModel: {
                Hedged: string;
                Mixed: string;
                Spot: string;
            };
            PricePartType: {
                CONVERTER_VOLUME_ENERGY: string;
                FLAT_COST: string;
                MATRIX_COST_FIXED: {
                    COST_DKK: string;
                    COST_EUR: string;
                    COST_NOK: string;
                    COST_PLN: string;
                    COST_SEK: string;
                };
                MATRIX_COST_PRICE: {
                    COST_DKK: string;
                    COST_EUR: string;
                    COST_NOK: string;
                    COST_PLN: string;
                    COST_SEK: string;
                };
                MATRIX_COST_PRICE_ENERGYCAPACITY: {
                    COST_DKK: string;
                    COST_EUR: string;
                    COST_NOK: string;
                    COST_PLN: string;
                    COST_SEK: string;
                };
                MATRIX_COST_SERIES: {
                    COST_DKK: string;
                    COST_EUR: string;
                    COST_NOK: string;
                    COST_PLN: string;
                    COST_SEK: string;
                };
                MATRIX_COST_SERIES_TOP: {
                    COST_DKK: string;
                    COST_EUR: string;
                    COST_NOK: string;
                    COST_PLN: string;
                    COST_SEK: string;
                };
                SERIES_COST_ENERGY: {
                    COST_DKK: string;
                    COST_EUR: string;
                    COST_NOK: string;
                    COST_PLN: string;
                    COST_SEK: string;
                };
                SERIES_COST_ENERGY_TAX: string;
                SERIES_COST_ENERGY_TAX_REDUCED: string;
                SERIES_COST_ENV_CO2: string;
                SERIES_COST_LOAD_ENERGY: {
                    COST_DKK: string;
                    COST_EUR: string;
                    COST_NOK: string;
                    COST_PLN: string;
                    COST_SEK: string;
                };
                SERIES_COST_SEASON_ENERGY: {
                    COST_DKK: string;
                    COST_EUR: string;
                    COST_NOK: string;
                    COST_PLN: string;
                    COST_SEK: string;
                };
                SERIES_COST_SEASON_VOLUME: {
                    COST_DKK: string;
                    COST_EUR: string;
                    COST_NOK: string;
                    COST_PLN: string;
                    COST_SEK: string;
                };
                SERIES_COST_VOLUME: {
                    COST_DKK: string;
                    COST_EUR: string;
                    COST_NOK: string;
                    COST_PLN: string;
                    COST_SEK: string;
                };
                SERIES_COST_WEIGHT: {
                    COST_DKK: string;
                    COST_EUR: string;
                    COST_NOK: string;
                    COST_PLN: string;
                    COST_SEK: string;
                };
                THRESHOLD_COST_RETURN_TEMPERATURE: {
                    COST_DKK: string;
                    COST_EUR: string;
                    COST_NOK: string;
                    COST_PLN: string;
                    COST_SEK: string;
                };
            };
            Quantity: {
                COST_DKK: string;
                COST_EUR: string;
                COST_NOK: string;
                COST_PLN: string;
                COST_SEK: string;
                ENERGY: string;
                ENV_CO2: string;
                VOLUME: string;
            };
            Tax: {
                CarbonDioxideTax: string;
                EnergyTax: string;
            };
            Type: {
                FlatCost: {
                    '*': {
                        MONTH: string;
                        YEAR: string;
                    };
                    COLDWATER: {
                        'APARTMENTS;MONTH': string;
                        'APARTMENTS;YEAR': string;
                        'DAYWATER;MONTH': string;
                        'DAYWATER;YEAR': string;
                    };
                    COOLING: {
                        'DEBEFFECT1;MONTH': string;
                        'DEBEFFECT1;YEAR': string;
                        'DEBEFFECT2;MONTH': string;
                        'DEBEFFECT2;YEAR': string;
                    };
                    ELECTRICITY: {
                        'EFFECT1;MONTH': string;
                        'EFFECT1;YEAR': string;
                        'EFFECT2;MONTH': string;
                        'EFFECT2;YEAR': string;
                    };
                    HEATING: {
                        'DEBEFFECT1;MONTH': string;
                        'DEBEFFECT1;YEAR': string;
                        'DEBEFFECT2;MONTH': string;
                        'DEBEFFECT2;YEAR': string;
                    };
                };
                SeriesPricePart: {
                    ELECTRICITY: {
                        ENERGYTAX: string;
                        ENERGYTAX_REDUCED: string;
                        'NORDPOOL_SPOT;SE1': string;
                        'NORDPOOL_SPOT;SE2': string;
                        'NORDPOOL_SPOT;SE3': string;
                        'NORDPOOL_SPOT;SE4': string;
                    };
                };
            };
        };
        ContractType: string;
        EmissionFactor: string;
        EmissionScopeTag: string;
        PriceModel: string;
        PricePartType: string;
    };
    pricePartHandler: {
        addAdditional: string;
        crud: string;
        overview: string;
    };
    profileScore: {
        help: string;
        profileScore: string;
    };
    prognosisGraph: {
        from: string;
        savingsGoal: string;
        to: string;
    };
    qualityKpi: {
        footNote: string;
        goToQualityReportButton: string;
        header: string;
        helpHtml: string[];
        noData: string;
        period: string;
        warnHtml: string[];
    };
    qualityReportKeyValues: {
        nrOfAlarms: string;
        totalQuality: string;
    };
    qualityReportStatus: {
        exportTo: string;
        goTo: string;
        name: string;
        noRemarks: string;
        nrOfAlarms: string;
        quality: string;
        status: string;
        title: string;
    };
    quantityUi: {
        quantity: {
            AIR_TEMPERATURE: string;
            AMOUNT: string;
            COMPOSTING__DIVERTED_OTHER: string;
            COST_DKK: string;
            COST_DKK_REAL: string;
            COST_DKK_REAL_TOTAL: string;
            COST_DKK_REAL_TOTAL_VAT: string;
            COST_DKK_REAL_TOTAL_VAT_REDUCED: string;
            COST_DKK_REAL_VAT: string;
            COST_DKK_REAL_VAT_REDUCED: string;
            COST_DKK_SIMUL_TOTAL: string;
            COST_DKK_SIMUL_TOTAL_VAT: string;
            COST_DKK_SIMUL_TOTAL_VAT_REDUCED: string;
            COST_DKK_VAT: string;
            COST_DKK_VAT_REDUCED: string;
            COST_EUR: string;
            COST_EUR_REAL: string;
            COST_EUR_REAL_TOTAL: string;
            COST_EUR_REAL_TOTAL_VAT: string;
            COST_EUR_REAL_TOTAL_VAT_REDUCED: string;
            COST_EUR_REAL_VAT: string;
            COST_EUR_REAL_VAT_REDUCED: string;
            COST_EUR_SIMUL_TOTAL: string;
            COST_EUR_SIMUL_TOTAL_VAT: string;
            COST_EUR_SIMUL_TOTAL_VAT_REDUCED: string;
            COST_EUR_VAT: string;
            COST_EUR_VAT_REDUCED: string;
            COST_NOK: string;
            COST_NOK_REAL: string;
            COST_NOK_REAL_TOTAL: string;
            COST_NOK_REAL_TOTAL_VAT: string;
            COST_NOK_REAL_TOTAL_VAT_REDUCED: string;
            COST_NOK_REAL_VAT: string;
            COST_NOK_REAL_VAT_REDUCED: string;
            COST_NOK_SIMUL_TOTAL: string;
            COST_NOK_SIMUL_TOTAL_VAT: string;
            COST_NOK_SIMUL_TOTAL_VAT_REDUCED: string;
            COST_NOK_VAT: string;
            COST_NOK_VAT_REDUCED: string;
            COST_PLN: string;
            COST_PLN_REAL: string;
            COST_PLN_REAL_TOTAL: string;
            COST_PLN_REAL_TOTAL_VAT: string;
            COST_PLN_REAL_TOTAL_VAT_REDUCED: string;
            COST_PLN_REAL_VAT: string;
            COST_PLN_REAL_VAT_REDUCED: string;
            COST_PLN_SIMUL_TOTAL: string;
            COST_PLN_SIMUL_TOTAL_VAT: string;
            COST_PLN_SIMUL_TOTAL_VAT_REDUCED: string;
            COST_PLN_VAT: string;
            COST_PLN_VAT_REDUCED: string;
            COST_SEK: string;
            COST_SEK_REAL: string;
            COST_SEK_REAL_TOTAL: string;
            COST_SEK_REAL_TOTAL_VAT: string;
            COST_SEK_REAL_TOTAL_VAT_REDUCED: string;
            COST_SEK_REAL_VAT: string;
            COST_SEK_REAL_VAT_REDUCED: string;
            COST_SEK_SIMUL_TOTAL: string;
            COST_SEK_SIMUL_TOTAL_VAT: string;
            COST_SEK_SIMUL_TOTAL_VAT_REDUCED: string;
            COST_SEK_VAT: string;
            COST_SEK_VAT_REDUCED: string;
            CURRENT: string;
            DATA_QUALITY: string;
            DEEP_WELL_INJECTION__DIVERTED_OTHER: string;
            DELTA_TEMPERATURE: string;
            DISTANCE: string;
            DISTANCE_PKM: string;
            DURATION: string;
            ENERGY: string;
            ENERGY_DDADJUSTED: string;
            ENERGY_DDN_CDD: string;
            ENERGY_DDN_HDD: string;
            ENERGY_NONRENEWABLE: string;
            ENERGY_REACTIVE: string;
            ENERGY_RENEWABLE: string;
            ENERGY_SMHI_EI: string;
            ENERGY_SMHI_HDD: string;
            ENV_CO2: string;
            ENV_CO2_COMP: string;
            ENV_CO2_REAL: string;
            ENV_CO2_SIMUL_LOCATION: string;
            ENV_CO2_SIMUL_MARKET: string;
            FLOW: string;
            FORWARD_TEMPERATURE: string;
            HUMIDITY: string;
            INCINERATION__INCINERATION: string;
            LANDFILL__LANDFILL: string;
            NONE: string;
            'ON-SITE_STORAGE__DIVERTED_OTHER': string;
            OTHER__OTHER: string;
            PERCENT: string;
            POWER: string;
            POWER_PHASE_ONE: string;
            POWER_PHASE_THREE: string;
            POWER_PHASE_TWO: string;
            RECOVERY__DIVERTED_TO_ENERGY: string;
            RECYCLING__DIVERTED_RECYCLING: string;
            RETURN_TEMPERATURE: string;
            REUSE__DIVERTED_OTHER: string;
            VOLTAGE: string;
            VOLUME: string;
            WEIGHT: string;
            WIND_SPEED: string;
        };
        units: {
            AIR_TEMPERATURE: string;
            AMOUNT: string;
            COST_DKK: string;
            COST_DKK_REAL_TOTAL: string;
            COST_EUR: string;
            COST_EUR_REAL_TOTAL: string;
            COST_NOK: string;
            COST_NOK_REAL_TOTAL: string;
            COST_PLN: string;
            COST_PLN_REAL_TOTAL: string;
            COST_SEK: string;
            COST_SEK_REAL_TOTAL: string;
            DATA_QUALITY: string;
            DELTA_TEMPERATURE: string;
            DISTANCE: string;
            DISTANCE_PKM: string;
            ENERGY: string;
            ENV_CO2: string;
            FLOW: string;
            FORWARD_TEMPERATURE: string;
            PERCENT: string;
            POWER: string;
            RETURN_TEMPERATURE: string;
            VOLUME: string;
            WEIGHT: string;
            area: string;
            degrees: string;
            environmental_guests: string;
            guestnights: string;
            keyvalue: string;
            servings: string;
            usage: string;
            visitors: string;
        };
        uom: {
            GJ: string;
            GWh: string;
            MJ: string;
            MWh: string;
            TWh: string;
            Wh: string;
            g: string;
            h: string;
            kWh: string;
            kg: string;
            km: string;
            litres: string;
            m3: string;
            microlitres: string;
            millilitres: string;
            'm³': string;
            none: string;
            percent: string;
            ton: string;
        };
    };
    questionModal: {
        explainer: string;
        header: string;
        placeholder: string;
    };
    ranking: {
        goToRankingReportButton: string;
        header: string;
    };
    rankingBarTooltip: {
        coverage: string;
    };
    rankingData: {
        noRankableChildren: string;
    };
    rankingGameifiedKeyvalues: {
        average: string;
        improvement: string;
        places: string;
        rank: string;
        title: string;
    };
    rankingGameifiedRankPicker: {
        header: string;
    };
    rankingGameifiedRankTitle: {
        change: string;
        places: string;
        rank: string;
        unchanged: string;
        usage: string;
    };
    rankingGameifiedTable: {
        average: string;
        header: string;
    };
    rankingHeaderRow: {
        change: string;
        name: string;
    };
    rankingReportHeader: {
        label: string;
    };
    rankingTable: {
        noData: string;
    };
    readingMetaWidget: {
        availableDataBetween: string;
        collapseMeta: string;
        energyUsageTags: {
            building: string;
            building_outdoor: string;
            building_services: string;
            tenant: string;
            tenant_by_landlord: string;
            unspecified: string;
        };
        expandMeta: string;
        helpHtml: string[];
        noData: string;
        resolutions: {
            '': string;
            day: string;
            hour: string;
            inconclusive: string;
            minute: string;
            month: string;
            null: string;
            undetermined: string;
            unknown: string;
        };
        restMeterLevel: string;
        setKindTagFailed: string;
        setLevelFailed: string;
        setMeterFactorFailed: string;
        table: {
            availableData: string;
            kindTagName: string;
            lastSeenMOM: string;
            lastSeenMS: string;
            lastSeenValue: string;
            meterConstant: string;
            meterLevel: string;
            momentary: string;
            noPreviousMom: string;
            noPreviousMs: string;
            resolutionType: string;
            usage: string;
            valueType: string;
        };
        title: string;
        valueTypes: {
            '': string;
            cons: string;
            inconclusive: string;
            mom: string;
            ms: string;
            null: string;
        };
    };
    reportInfo: {
        reportLabel: string;
        reports: {
            consumption: string;
            consumptionAnalysis: string;
            consumptionProfile: string;
            cost: string;
            cost_sek: string;
            costAnalysis: string;
            costRanking: string;
            energySignature: string;
            energySignatureCooling: string;
            environment: string;
            epc: string;
            momentaryAnalysis: string;
            premisesMap: string;
            quality: string;
            ranking: string;
            sustainability: string;
            tenantBilling: string;
            trendAnalysis: string;
            waste: string;
        };
        toolLabel: string;
        tools: {
            agreements: string;
            asana: string;
            billing: string;
            holdingsOverview: string;
            meterDataStatus: string;
            pdfBuilder: string;
            rankingGameified: string;
            stat: string;
            timelapse: string;
            users: string;
        };
    };
    reportLoadData: {
        loadData: string;
    };
    reports: {
        pdfBuilder: {
            title: string;
        };
    };
    reportSettings: {
        comparisonGroup: {
            comparisonGroup: string;
            kindGroup: string;
        };
        currency: {
            COST_DKK: string;
            COST_DKK_REAL_TOTAL: string;
            COST_EUR: string;
            COST_EUR_REAL_TOTAL: string;
            COST_NOK: string;
            COST_NOK_REAL_TOTAL: string;
            COST_PLN: string;
            COST_PLN_REAL_TOTAL: string;
            COST_SEK: string;
            COST_SEK_REAL_TOTAL: string;
            NO_COST_QUANTITY: string;
        };
        display: {
            header: {
                currencyConversion: string;
                divideByArea: string;
                divideByEnvironmentalGuests: string;
                divideByGuestNights: string;
                divideByKeyValue: string;
                divideByServings: string;
                divideByUsage: string;
                divideByVacancy: string;
                divideByVisitors: string;
                divisionModel: string;
                grouped: string;
                weatherNormalization: string;
            };
            no_choice: string;
            toggle: {
                false: string;
                true: string;
            };
        };
        labels: {
            comparisons: string;
            cons: string;
            conversion: string;
            costNetTags: string;
            costTags: string;
            data: string;
            filters: string;
            goals: string;
            measurement_type: string;
            momentary: string;
            quantity: string;
            reference_periods: string;
            usage_area: string;
            years: string;
        };
        noSettings: string;
        pin: string;
        quantitySelect: {
            costQuantity: string;
            costRealQuantity: string;
        };
        reportSettings: string;
        settings: {
            compareSelected: string;
            coverage: {
                cost: string;
                degreedays: string;
                environment: string;
                virtualMeters: string;
            };
            filters: {
                coverage: string;
                likeForLike: string;
            };
            groupData: string;
            kindType: {
                CALCULATION: string;
            };
            no_area_division: string;
            no_key_value_division: string;
            unweighted: string;
            weighted: string;
            weighted_average: string;
        };
        unpin: string;
    };
    resetForm: {
        changePassword: string;
        createPassword: string;
        createPasswordExtra: string;
        goBack: string;
        instructions: string;
        resetting: string;
    };
    resourceUsageBase: {
        costSpecification: string;
        envSpecification: string;
        helpHtml: string[];
    };
    role: {
        from: string;
    };
    saveButton: {
        save: string;
    };
    search: {
        resultList: {
            error: string;
            foundObjects: string;
            nothingFound: string;
        };
        search: {
            loading: string;
            placeholder: string;
        };
    };
    sectionItem: {
        noArea: string;
    };
    showConfirm: {
        ERROR_METERCHANGE: string;
        ERROR_TOO_HIGH: string;
        ERROR_TOO_LOW: string;
        confirmNo: string;
        confirmYes: string;
    };
    showPasswordToggle: {
        showPassword: string;
    };
    spanList: {
        via: string;
    };
    specificationTable: {
        area: string;
        type: string;
    };
    sso: {
        backToNormal: string;
    };
    standardCard: {
        description: string;
        heading: string;
        shortDescription: string;
    };
    stat: {
        topPremises: string;
        topUsers: string;
        topViews: string;
        views: string;
    };
    subKindBar: {
        area: string;
        cost: string;
        degreedays_cooling: string;
        degreedays_heating: string;
        energy: string;
        env: string;
        environmentalGuests: string;
        guestNights: string;
        keyValue: string;
        mediaTypes: string;
        noArea: string;
        noData: string;
        observe: {
            cost: string;
            env: string;
        };
        quantity: {
            AMOUNT: string;
            COST_SEK: string;
            COST_SEK_REAL_TOTAL: string;
            DISTANCE: string;
            DISTANCE_PKM: string;
            ENERGY: string;
            ENV_CO2: string;
            VOLUME: string;
            WEIGHT: string;
        };
        servings: string;
        total: string;
        usage: string;
        vacancy: string;
        visitors: string;
    };
    sustainability: {
        average: string;
        change: string;
        climateCompare: string;
        climateCompensation: string;
        CO2PerDistance: string;
        compare: string;
        compareWithOthers: string;
        consumption: string;
        current: string;
        details: string;
        energyCompare: string;
        environment: string;
        explainers: {
            climateCompare: string;
            energyCompare: string;
            waterCompare: string;
        };
        exportDownloadButton: {
            download: string;
            exportName: string;
        };
        info: {
            compareCO2Flight: string;
            compareEnergyCons: string;
            compareWaterCons: string;
            compareWaterConsPools: string;
        };
        lessDetails: string;
        noData: string;
        nonRenewable: string;
        plantedTrees: string;
        renewable: string;
        renewableElectricity: string;
        solarEnergy: {
            description: string;
            description2: string;
            stats: {
                boughtSolarEnergyDescription: string;
                producedSolarEnergyDescription: string;
                solarUtilizationDescription: string;
                totalProductionTitle: string;
                utilizedEnergyDescription: string;
            };
            title: string;
        };
        sortedTotal: string;
        totalCO2: string;
        totalEnergy: string;
        totalWater: string;
        transport: string;
        units: {
            houses: string;
            planetLaps: string;
            swimmingPools: string;
        };
        unsortedTotal: string;
        waste: string;
        water: string;
        waterCompare: string;
        we: string;
    };
    tableCell: {
        copiedId: string;
    };
    tableDropdown: {
        deselectAll: string;
        selectAll: string;
    };
    tableFilter: {
        filter: string;
    };
    tableSearch: {
        search: string;
    };
    tagUi: {
        tag: {
            cost: {
                net: string;
                tax: string;
                trade: string;
            };
            cost_net: {
                fixed: string;
                penalty: string;
                power: string;
                variable: string;
            };
            emission_scope: {
                scope1: string;
                scope2: string;
                scope3: string;
            };
            energy_usage: {
                building: string;
                building_outdoor: string;
                building_services: string;
                tenant: string;
                tenant_by_landlord: string;
                unspecified: string;
            };
            financial_flow: {
                sold: string;
                utilized: string;
            };
            kind: {
                coldwater: string;
                cooling: string;
                electricity: string;
                heating: string;
                hotwater: string;
            };
            local_environmental_scope: {
                service: string;
                transportation: string;
            };
            origin_type: {
                automatic: string;
                manual: string;
                robot: string;
                virtual: string;
            };
            production_flow: {
                bought: string;
                produced: string;
            };
            production_source: {
                distributor: string;
                geothermal: string;
                pv: string;
                solarthermal: string;
                windpower: string;
            };
            transportation_trips: {
                boat: string;
                buss: string;
                car: string;
                flight: string;
                other: string;
                rentalcar: string;
                taxi: string;
                train: string;
            };
            utilization: {
                comfort: string;
                process: string;
            };
            waste_destination: {
                deep_well_injection: string;
                diverted_other: string;
                diverted_recycling: string;
                diverted_waste_to_energy: string;
                incineration: string;
                landfill: string;
                on_site_storage: string;
                other: string;
                reuse: string;
            };
            waste_hazard_level: {
                hazardous: string;
                non_hazardous: string;
            };
        };
        tag_group: {
            cost: string;
            cost_net: string;
            emission_scope: string;
            energy_usage: string;
            financial_flow: string;
            kind: string;
            local_environmental_scope: string;
            origin_type: string;
            production_flow: string;
            production_source: string;
            transportation_trips: string;
            utilization: string;
            waste_destination: string;
            waste_hazard_level: string;
        };
    };
    tenantActions: {
        confirmMoveOutTenant: string;
        create: string;
        edit: string;
        moveInTenant: string;
        moveOutTenant: string;
    };
    tenantBilling: {
        cost: string;
        coverage: string;
        noCost: string;
        noCoverage: string;
        period: string;
        specification: string;
        total: string;
    };
    tenantTable: {
        areaQuote: string;
        billingDiff: string;
        billingKind: string;
        billingSummary: string;
        contractArea: string;
        distributionKey: string;
        filename: string;
        noActiveContracts: string;
        premisesArea: string;
        title: string;
        usage: string;
    };
    terms: {
        acceptTerms: string;
    };
    termsAndConditions: {
        footer: {
            accept: string;
            cancel: string;
        };
        header: {
            termsAndConditions: string;
            updated: string;
        };
        sections: {
            additionalServices: {
                heading: string;
                section1: string;
                section2: string;
            };
            cancellation: {
                heading: string;
                section1: string;
                section2: string;
                section3: string;
            };
            dataAndSecurity: {
                heading: string;
                section1: string;
                section2: string;
                section3: string;
                section4: {
                    main: string;
                    trail: string;
                };
                section5: string;
            };
            definitions: {
                heading: string;
                section1: {
                    main: string;
                    subsection1: {
                        label: string;
                        text: string;
                    };
                    subsection2: {
                        label: string;
                        text: string;
                    };
                    subsection3: {
                        label: string;
                        text: string;
                    };
                    subsection4: {
                        label: string;
                        text: string;
                    };
                    subsection5: {
                        label: string;
                        text: string;
                    };
                    subsection6: {
                        label: string;
                        text: string;
                    };
                    subsection7: {
                        label: string;
                        text: string;
                    };
                    subsection8: {
                        label: string;
                        text: string;
                    };
                    subsection9: {
                        label: string;
                        text: string;
                    };
                    subsection10: {
                        label: string;
                        text: string;
                    };
                    subsection11: {
                        label: string;
                        text: string;
                    };
                    subsection12: {
                        label: string;
                        text: string;
                    };
                    subsection13: {
                        label: string;
                        text: string;
                    };
                };
            };
            disputeResolution: {
                heading: string;
                section1: string;
                section2: string;
                section3: string;
                section4: string;
                section5: string;
                section6: string;
            };
            forceMajeure: {
                heading: string;
                section1: string;
            };
            immaterialRights: {
                heading: string;
                section1: string;
                section2: string;
                section3: {
                    main1: string;
                    main2: string;
                    main3: string;
                    subsection1: string;
                    subsection2: string;
                };
                section4: string;
                section5: string;
                section6: string;
            };
            introduction: {
                heading: string;
                section1: string;
                section2: string;
            };
            other: {
                heading: string;
                section1: string;
                section2: string;
                section3: string;
                section4: string;
                section5: string;
            };
            priceAndPaymentTerms: {
                heading: string;
                section1: string;
                section2: {
                    main: string;
                    subsection1: string;
                    subsection2: string;
                    subsection3: string;
                    subsection4: string;
                    subsection5: string;
                };
                section3: string;
                section4: string;
                section5: string;
                section6: string;
            };
            responsibility: {
                heading: string;
                section1: string;
                section2: string;
                section3: string;
                section4: string;
                section5: string;
                section6: string;
                section7: string;
            };
            secrecy: {
                heading: string;
                section1: string;
                section2: string;
            };
            service: {
                heading: string;
                section1: {
                    main: string;
                    subsection1: string;
                    subsection2: string;
                    subsection3: string;
                    subsection4: string;
                    subsection5: string;
                    subsection6: string;
                };
                section2: {
                    main: string;
                    subsection1: string;
                    subsection2: string;
                    subsection3: string;
                    trail: string;
                };
                section3: string;
                section4: string;
                section5: string;
                section6: string;
                section7: {
                    main: string;
                    subsection1: string;
                    subsection2: string;
                    subsection3: string;
                    subsection4: string;
                    trail: string;
                };
                section8: {
                    main: string;
                    trail: string;
                };
                section9: string;
                section10: string;
                section11: string;
                section12: string;
                section13: string;
            };
            shutdownOfService: {
                heading: string;
                section1: string;
                section2: string;
            };
            terminationOfAgreement: {
                heading: string;
                section1: string;
            };
            warranties: {
                heading: string;
                section1: {
                    main: string;
                    subsection1: string;
                    subsection2: string;
                };
                section2: string;
            };
        };
    };
    thresholdAlarm: {
        threshold: {
            average_power: {
                alarmInfo: {
                    ENERGY: string;
                    VOLUME: string;
                };
            };
            consumption: {
                alarmInfo: {
                    ENERGY: string;
                    VOLUME: string;
                };
            };
        };
    };
    timelineWidget: {
        header: string;
    };
    timelineWidgetGraph: {
        untilFurther: string;
    };
    transportationTripsTag: {
        tripType: string;
    };
    trendAnalysis: {
        cancel: string;
        coverage: string;
        fraction: string;
        fractionOfYear: string;
        groupData: string;
        notifications: {
            noData: string;
        };
        references: {
            BUDGET: string;
            NORMAL_YEAR: string;
        };
        save: string;
        sum: string;
    };
    trendAnalysisButtonGroup: {
        save: string;
    };
    trendAnalysisReportHeader: {
        help: string;
    };
    unauthenticatedUser: {
        notCurrentUser: string;
    };
    updatePageToast: {
        newVersionAvailable: string;
        reloadPage: string;
    };
    uploader: {
        drag: string;
        fileTooLarge: string;
        pick: string;
        unsupportedType: string;
    };
    uploaderFile: {
        archiveFile: string;
        confirmFileRemoval: string;
    };
    uploadWidget: {
        uploaded: string;
    };
    useLoginAction: {
        incorrectLogin: string;
        invalidChannel: string;
        missingParam: string;
    };
    userCrud: {
        accessTo: string;
        invite: string;
        language: string;
    };
    userReport: {
        numberOf: string;
        tenants: string;
        users: string;
    };
    userRole: {
        about: string;
        pick: string;
        question: string;
        skip: string;
    };
    userRoleGroup: {
        financesAndAdministration: string;
        financialAccounting: string;
        management: string;
        propertyOperations: string;
        sustainabilityAndEnvironment: string;
        technicalAdministration: string;
    };
    usersTable: {
        archiveMarked: string;
        confirmUsersRemoval: string;
        newUser: string;
        noUsers: string;
    };
    userTableActions: {
        archiveUser: string;
        confirmUserRemoval: string;
        editUser: string;
    };
    useTable: {
        accessTo: string;
        check: string;
        checkAll: string;
    };
    vehicle: {
        createMeters: string;
        distanceMeterName: string;
        fuelMeterName: string;
    };
    versionEditor: {
        button: {
            addVersion: string;
        };
        header: {
            heading: string;
        };
        heading: string;
    };
    virtualCrud: {
        contract: string;
        virtualMeter: string;
    };
    virtualMeterActions: {
        clone: string;
        edit: string;
        unparsable: string;
    };
    virtualMeterWidget: {
        activeSpan: string;
        create: string;
        inspect: string;
        parent: string;
        untilFurther: string;
    };
    virtualUnitWidget: {
        activeSpan: string;
        create: string;
        parent: string;
        tenant: string;
        untilFurther: string;
    };
    virtualUnitWidgetContract: {
        debit: string;
    };
    vmOverview: {
        header: string;
        helpHtml: string[];
        noData: string;
        period: string;
    };
    waste: {
        chartFooter: string;
        fractions: string;
        totalWaste: string;
        treatmentMethod: string;
    };
    wasteDataInDetails: {
        dataInDetail: string;
        filterBy: string;
    };
    wasteFractionMenu: {
        selectFraction: string;
    };
    wasteKeyvalues: {
        change: string;
        totalCost: string;
    };
    wasteLineChart: {
        comparedToPreviousYear: string;
        noteAccumulated: string;
    };
    wasteTreatmentMethodMenu: {
        selectTreatmentMethod: string;
    };
    widgetHeader: {
        header: string;
    };
    widgetSwitch: {
        contract: string;
        virtualMeter: string;
    };
    yearDate: {
        invalidMessage: string;
    };
}