import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string; //brand2
            secondary: string; //brand3
            terciary: string; //brand4

            greys: {
                grey0: string;
                grey2: string;
                grey5: string;
                grey6: string;
                grey7: string;
            };

            background: string; //grey5
            text: string; //brand1
        };

        titles: {
            title1: string;
            title2: string;
            title3: string;
            title4: string;
            title5: string;
        };

        subtitles: {
            subTitle1: string;
            subTitle2: string;
            subTitle3: string;
        };

        texts: {
            text1: string;
            text2: string;
            text3: string;
            text4: string;
            text5: string;
            text6: string;
            text7: string;
            text8: string;
        };

        radius: {
            default: string;
            modalContact: string;
            btnCurriculum: string;
        };

        weights: {
            extraBold: number;
            bold: number;
            semiBold: number;
            medium: number;
            regular: number;
            light: number;
        };
    }
}
